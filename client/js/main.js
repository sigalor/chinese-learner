async function chooseLecture(index) {
	let lectureButton = $(`.lecture-button[data-lecture-index=${index}]`);
	lectureButton.addClass("item-chosen");
	$("#lecture-chooser").addClass("in-background");
	initLearner(index);//`Lektion ${index+1}`, "Deutsch &rarr; Chinesisch", "auch, ebenso");
	await sleep(500);

	lectureButton.removeClass("item-chosen");
	$("#lecture-chooser").addClass("invisible");
	$("#learner").removeClass("in-background").removeClass("invisible");
}

function createLectureButton(index, title, subTitle) {
	return divClass("lecture-button")
		.attr("data-lecture-index", index)
		.append(divClass("title").html(title))
		.append(divClass("sub-title").html(subTitle))
		.click(async function() {
			chooseLecture(parseInt($(this).attr("data-lecture-index")));
		});
}

function initLectureList() {
	let lectureList = $("#lecture-list");
	vocabulary.forEach((v, idx) => {
		lectureList.append(createLectureButton(idx, `Lektion ${idx+1}`, `${v.words.length} Vokabeln`));
	});
}



const USE_CACHE_ONLY = false;

function createMultipleChoice(options, correctIdx) {
	let mc = divClass("multiple-choice");
	options.forEach((o, idx) => {
		mc.append(divClass("item")
			.append(divClass("item-container")
				.append(divClass("item-content").html(o))
			)
			.attr("data-item-index", idx)
			.attr("data-is-correct", idx==correctIdx)
			.click(async function() {
				if($(this).parent().hasClass("is-decided"))
					return

				let isCorrect = $(this).attr("data-is-correct")=="true";
				$(this).addClass(isCorrect ? "correct" : "incorrect");
				$(this).parent().addClass("is-decided");
				showSummary();
				if(!isCorrect) {
					//await sleep(400);
					$(this).parent().find(".item[data-is-correct=true]").addClass("correct");
				}
			})
		);
	});
	return mc;
}

function createKeyboard(keys, correctAnswer) {
	let kb = divClass("keyboard")
		.append(divClass("input")
			.append(tagClass("input", "text-input")
				.attr("type", "text")
				.keyup(function(e) {
					if(e.keyCode == 13  ||  $(this).val().toLowerCase() == correctAnswer)
						$(this).parent().children(".submit").click();
				})
			)
			.append(divClass("erase-char")
				.append(divClass("erase-char-content").append(faIcon("fa-erase-left")))
				.click(function() {
					let kbParent = $(this).parent().parent();
					if(kbParent.hasClass("is-decided"))
						return;
					let textInput = $(this).parent().children("input.text-input");
					if(textInput.val() != "") {
						textInput.val(textInput.val().substr(0, textInput.val().length - 1));
					}
				})
			)
			.append(divClass("submit")
				.append(divClass("submit-content").append(
					faIcon("fa-angle-right")
				))
				.click(function() {
					let kbParent = $(this).parent().parent();
					if(kbParent.hasClass("is-decided"))
						return;
					let textInput = $(this).parent().children("input.text-input");
					//if(textInput.val() != "") {
						textInput.addClass(textInput.val().toLowerCase() == correctAnswer ? "correct" : "incorrect").attr("readonly", "true");
						kbParent.addClass("is-decided");
						showSummary();
					//}
				})
			)
		);

	let keysElmt = divClass("keys");
	keys.forEach((key, idx) => {
		keysElmt.append(divClass("key")
			.append(divClass("key-container").append(divClass("key-content").html(key)))
			.click(function() {
				if(!$(this).parent().parent().hasClass("is-decided")) {
					let keyContent = $(this).find(".key-content").html();
					let textInput = $(this).parent().parent().find("input.text-input");
					textInput.val(textInput.val() + keyContent);
					if(textInput.val().toLowerCase() == correctAnswer)
						$(this).parent().parent().find(".submit").click();
				}
			})
		);
	});

	kb.append(keysElmt);
	return kb;
}

function createWordChooser(options, correctAnswer) {
	let wc = divClass("word-chooser")
		.append(divClass("input")
			.append(divClass("input-words")
				.append(divClass("word dummy").append(divClass("word-container").append(divClass("word-content").html("&nbsp;"))))
			)
			.append(divClass("submit")
				.append(divClass("submit-content").append(
					faIcon("fa-angle-right")
				))
				.click(function() {
					$(this).parent().addClass(getCurrAnswer()==correctAnswer ? "correct" : "incorrect");
					$(this).parent().parent().addClass("is-decided");
					showSummary();
				})
			)
		);
	let getCurrAnswer = () => wc.find(".input > .input-words > .word:not(.dummy) > .word-container > .word-content").toArray().map(a => a.innerHTML).join(" ");
	
	let optionsElmt = divClass("options");
	options.forEach((option, idx) => {
		optionsElmt.append(divClass("word")
			.append(divClass("word-container").append(divClass("word-content").html(option)))
			.attr("data-option-index", idx)
			.click(function() {
				if($(this).hasClass("chosen")  ||  wc.hasClass("is-decided"))
					return;
				let inputElmt = $(this).parent().parent().children(".input");
				inputElmt.children(".input-words").append($(this)
					.clone()
					.click(function() {
						if(wc.hasClass("is-decided"))
							return;
						let currIdx = parseInt($(this).attr("data-option-index"));
						$(this).parent().parent().parent().find(`.options > .word[data-option-index=${currIdx}]`).removeClass("chosen");
						$(this).detach();
					})
				);
				$(this).addClass("chosen");

				if(getCurrAnswer() == correctAnswer)
					inputElmt.children(".submit").click();
			})
		);
	})

	wc.append(optionsElmt);
	return wc;
}

function createTask(fromLang, toLang, wordObj) {
	let inputMethod, currAnswer = wordObj[toLang[0]];
	let taskParams, taskCorrectAnswer;

	if(fromLang[0] == "german") {
		switch(toLang[0]) {
			case "mandarin" : inputMethod = (currAnswer.length == 1 ? "multiple-choice" : "keyboard"); break;
			case "pinyin"   : inputMethod = "keyboard"; break;
		}
	}
	else if(fromLang[0] == "mandarin") {
		switch(toLang[0]) {
			case "german"   : inputMethod = (currAnswer.length > 10  ||  currAnswer.indexOf(" ") != -1 ? "word-chooser" : "keyboard"); break;
			case "pinyin"   : inputMethod = "keyboard"; break;
		}
	}
	else if(fromLang[0] == "pinyin") {
		switch(toLang[0]) {
			case "german"   : inputMethod = (currAnswer.length > 10  ||  currAnswer.indexOf(" ") != -1 ? "word-chooser" : "keyboard"); break;
			case "mandarin" : inputMethod = (currAnswer.length == 1 ? "multiple-choice" : "keyboard"); break;
		}
	}

	let taskContent = divClass("task-content");
	switch(inputMethod) {
		case "multiple-choice": {
			taskCorrectAnswer = Math.floor(Math.random() * 6);
			taskParams = shuffleArrayCopy(vocabulary[currLectionIndex].words.map(w => w[toLang[0]]).filter(x => x!=currAnswer)).slice(0, 5);
			taskParams.splice(taskCorrectAnswer, 0, currAnswer);
			taskContent.append(createMultipleChoice(taskParams, taskCorrectAnswer));
			break;
		}

		case "keyboard": {
			taskCorrectAnswer = currAnswer.toLowerCase();
			taskParams = shuffleArray(currAnswer.split("").concat(diffArray(shuffleArrayCopy(allLetters[currLectionIndex][toLang[0]]), currAnswer.split("")).slice(0, 11 - currAnswer.length)));
			taskContent.append(createKeyboard(taskParams, taskCorrectAnswer));
			break;
		}

		case "word-chooser": {
			taskCorrectAnswer = currAnswer;
			taskParams = shuffleArray(currAnswer.split(" ").concat(diffArray([].concat(...vocabulary[currLectionIndex].words.map(w => w[toLang[0]].split(" "))), currAnswer.split(" ")).slice(0, 8 - currAnswer.split(" ").length)));
			taskContent.append(createWordChooser(taskParams, taskCorrectAnswer));
			break;
		}
	}

	let taskElmt = divClass("task")
		.append(divClass("task-description").html(`${fromLang[1]} &rarr; ${toLang[1]}`))
		.append(divClass("task-main").html(wordObj[fromLang[0]]))
		.append(taskContent);

	return taskElmt;
}

function createSummary(wordObj, charCacheFile) {
	let summaryElmt = divClass("summary")
		.append(divClass("summary-part")
			.append(divClass("part-description").html("Deutsch"))
			.append(divClass("part-content").html(wordObj.german))
		)
		.append(divClass("summary-part")
			.append(divClass("part-description").html("Chinesisch"))
			.append(divClass("part-stroke-order").append(divClass("").attr("id", "all-stroke-order-characters-container")))
		)
		.append(divClass("summary-part")
			.append(divClass("part-description").html("Pinyin"))
			.append(divClass("part-content").html(wordObj.pinyin))
		);
	
	let charSize = 40.0 / wordObj.mandarin.length;
	displayStrokeOrderCharacters(wordObj.mandarin, charSize > 10 ? 10 : charSize, charCacheFile, USE_CACHE_ONLY);
	return summaryElmt;
}

function createNextButton() {
	return divClass("next-button")
		.append(divClass("next-button-content")
			.append(faIcon("fa-angle-right"))
		)
		.click(async function() {
			if($(this).attr("data-was-clicked") != "true") {
				$(this).attr("data-was-clicked", true);
				$("#learner").addClass("fade-to-background");
				await sleep(400);
				initLearner(currLectionIndex);
				await sleep(200);
				$("#learner").removeClass("fade-to-background");
			}
		});
}

function showSummary() {
	let learner = $("#learner");
	learner.children(".task").css("left", "0%");
	learner.children(".summary").css("left", "40%");
	learner.children(".next-button").css("left", "80%");
}

let currLectionIndex, lastWordObj = -1;
function initLearner(lectionIndex) {
	let options = { german: "Deutsch", mandarin: "Chinesisch", pinyin: "Pinyin" };
	let fromLang = popRandomElement(options),
		toLang = popRandomElement(options);
	currLectionIndex = lectionIndex;

	let wordObj = lastWordObj;
	while(wordObj == lastWordObj)
		wordObj = getRandomEntry(vocabulary[lectionIndex].words);
	lastWordObj = wordObj;

	let backButton = $("#learner").children("#learner-back-button").detach();
	$("#learner")
		.empty()
		.append(backButton)
		.append(divClass("heading-container").append(tagClass("h1", "big-heading").html(`Lektion ${lectionIndex+1}`)))
		.append(createTask(fromLang, toLang, wordObj))
		.append(createSummary(wordObj, vocabulary[lectionIndex].charCacheFile))
		.append(createNextButton());
}

let allLetters = [];
function initAllLetters() {
	vocabulary.forEach(lection => {
		let letters = {german: "", mandarin: "", pinyin: ""};
		lection.words.forEach(w => {
			letters.german += w.german;
			letters.mandarin += w.mandarin;
			letters.pinyin += w.pinyin;
		});
		allLetters.push({
			german: uniquifyArray(letters.german.split("")),
			mandarin: uniquifyArray(letters.mandarin.split("")),
			pinyin: uniquifyArray(letters.pinyin.split(""))
		});
	});
}




async function buildCharCache() {
	for(let lection = 0; lection < vocabulary.length; lection++) {
		if(!confirm(`Now building cache for lection ${lection+1}.`))
			continue;
		for(let wordIdx = 0; wordIdx < vocabulary[lection].length; wordIdx++)
			await $.get("/strokeorder/" + vocabulary[lection][wordIdx].mandarin);
		alert(`Done building cache for lection ${lection+1}.`);
	}
}

$(document).ready(function() {
	initAllLetters();
	initLectureList();

	$("#learner-back-button").click(async () => {
		$("#learner").addClass("in-background");
		await sleep(500);
		$("#lecture-chooser").removeClass("in-background invisible");
		$("#learner").addClass("invisible");
	});
});

