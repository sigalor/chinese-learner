let _ = require("lodash");
let fs = require("fs");
let path = require("path");
let querystring = require("querystring");
let express = require("express");
let axios = require("axios");
let estroke = require("./src/estroke.js");
let app = express();



app.get("/strokeorder/:chars", async function(req, res) {
	const sizeRef = 10000;
	const charCacheFile = path.join(__dirname, "/client/cache/char_cache.json");
	const buildCache = false;

	let ret = new Array(req.params.chars.length);
	let charCache = fs.existsSync(charCacheFile) ? JSON.parse(fs.readFileSync(charCacheFile)) : [];
	let charCacheAdd = [];

	await Promise.all(req.params.chars.split("").map(async (currChar, idx) => {				//from https://stackoverflow.com/a/37576787
		let cachedChar = charCache.find(existingChar => existingChar.character==currChar);
		if(cachedChar != undefined) {
			ret[idx] = cachedChar;
			return;
		}
		
		let currRes = (await axios.post("http://www.eon.com.hk/common/fcg/estroke.fcg?task=getPhrase", querystring.stringify({
			uni: currChar,
			screenWidth: sizeRef,
			bias: "Simplified"
		}))).data.split("\n");

		let params = ["cvec", "sorder", "pinyins"].map(e => currRes.find(l => l.indexOf(`${e}[0]`) != -1).split("\"")[1]);
		ret[idx] = {
			character: currChar,
			strokes: estroke.parseStroke(params[0], params[1], sizeRef),
			pinyins: params[2].split(" ")
		};

		if(buildCache) {
			charCache.push(ret[idx]);
			console.log(`Added ${currChar} to character cache.`);
		}
	}));

	if(buildCache)
		fs.writeFileSync(charCacheFile, JSON.stringify(charCache));
	res.send(JSON.stringify(ret));
});

app.use(express.static("client"));

app.listen(1275, function() {
	console.log("chinese-learner listening on port 1275");
});
