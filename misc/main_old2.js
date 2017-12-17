function sleep(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(), ms);
	});
}

function getCanvas(id) {
	let canvas = $(id);
	return {
		canvas: canvas,
		ctx: canvas[0].getContext("2d"),
		width: parseInt(canvas.attr("width")),
		height: parseInt(canvas.attr("height"))
	};
}

function drawCharacterGrid(canvas, plan) {
	let {ctx, width, height} = canvas;
	if(plan == undefined)
		plan = "ninesquare";

	ctx.setLineDash([10, 2, 2, 2]);
	ctx.fillStyle = "#ffffff";
	ctx.fillRect(0, 0, width, height);

	ctx.beginPath();
	switch(plan) {
		case "star": {
			ctx.moveTo(0, 0),
			ctx.lineTo(width, height),
			ctx.moveTo(width, 0),
			ctx.lineTo(0, height),
			ctx.moveTo(width / 2, 0),
			ctx.lineTo(width / 2, height),
			ctx.moveTo(0, height / 2),
			ctx.lineTo(width, height / 2)
		}

		case "foursquare": {
			ctx.moveTo(0, 0),
			ctx.moveTo(width / 2, 0),
			ctx.lineTo(width / 2, height),
			ctx.moveTo(0, height / 2),
			ctx.lineTo(width, height / 2)
			break;
		}

		case "ninesquare": {
			ctx.moveTo(0, 0),
			ctx.moveTo(width / 3, 0),
			ctx.lineTo(width / 3, height),
			ctx.moveTo(2 * width / 3, 0),
			ctx.lineTo(2 * width / 3, height),
			ctx.moveTo(0, height / 3),
			ctx.lineTo(width, height / 3),
			ctx.moveTo(0, 2 * height / 3),
			ctx.lineTo(width, 2 * height / 3)
			break;
		}
	}
	ctx.strokeStyle = "#cccccc";
	ctx.stroke();
}



function decodeStrokeVector(strokeVector) {
	let f = Math.floor(strokeVector.length / 3), e = "";

	for(let b = 0; b < strokeVector.length; b++) {
		let g = b - f;
		if(g < 0)
			g += strokeVector.length;
		e += String.fromCharCode(strokeVector.charCodeAt(g) ^ "Copyright EON Media Limited 1999-2006 - http://www.eon.com.hk, Unit C, 13/F Skyview Cliff, 49 Conduit Road MidLevels Hong Kong. All Rights Reserved".charCodeAt(g % 147) & 15);
	}

	return e;
}

function parseStrokeVector(strokeVector) {
	let ret = []
	let decoded = decodeStrokeVector(strokeVector);
	
	for(let i = 2; i < decoded.length;) {
		let numStrokePoints = parseInt(decoded.substr(i, 3));
		i += 3;

		let currStroke = [];

		for(let j = 0; j < numStrokePoints; j++) {
			let currX = parseInt(decoded.substr(i, 4), 16) ^ 62953;
			if(currX > 32267)
				currX -= 65536;
			i += 4;

			let currY = parseInt(decoded.substr(i, 4), 16) ^ 10935;
			if(currY > 32267)
				currY -= 65536;
			i += 4;

			currStroke.push({ x: currX, y: currY, q: decoded.charAt(i) == "1" });
			i++;
		}

		ret.push(currStroke);
	}

	return ret;
}

function parseStrokeIdentifier(strokeIdentifier) {
	let allIdent = [];
	let ret = [];

	for(let i = 0; i < strokeIdentifier.length; i += 2) {
		let currIdent = parseInt(strokeIdentifier.substr(i, 2), 16) & 255;
		allIdent.push(currIdent);

		let isRadical = (currIdent&64) != 0;
		if(!isRadical) {
			let numNonRadicals = allIdent.reduce((prev, curr) => prev+((curr&128)==0), 0);
			let thisRadical = allIdent.find(x => x&128==0 && --numNonRadicals==-1);
			console.log(i/2, zStrokeIdentifier(allIdent, i/2), thisRadical, numNonRadicals);
			
		}
		
		ret.push({
			isRadical: (currIdent&64) != 0,
			isHook: (currIdent&128) != 0
		});
	}
	return ret;
}

function aStrokeIdentifierOriginal(strokeIdentifier, c) {
	for (var a = -1, d = 0; d <= c; ++d)
		strokeIdentifier[d] & 128 || ++a;
	return a;
}



function drawStroke(stroke, canvas) {
	let ctx = canvas.ctx;
	let points = stroke.strokePoints, d = false, c;

	if(points[0].q)
		c = points[0];
	else if(points[1].q) {
		let midX = (points[0].x + points[1].x) / 2,
			midY = (points[0].y + points[1].y) / 2;
		c = { x: midX, y: midY, q: true };
	}
	else
		c = points[0];

	let f = c.x, j = c.y, numPoints = points.length;
	for(let pointIdx = 1; pointIdx <= numPoints; pointIdx++) {
		let currX = points[pointIdx % numPoints].x,
			currY = points[pointIdx % numPoints].y;
		if(points[pointIdx % numPoints].q) {
			if(pointIdx > 1  ||  (pointIdx == 1  &&  points[0].q)) {
				if(d)
					ctx.lineTo(f, j);
				else {
					ctx.moveTo(f, j);
					d = true;
				}
				ctx.lineTo(currX, currY);
			}
			f = currX;
			j = currY;
			c = points[pointIdx % numPoints];
		}
		else {
			if(points[(pointIdx+1) % numPoints].q) {
				c = drawQuadraticCurve(ctx, c, points[pointIdx % numPoints], points[(pointIdx+1) % numPoints], d);
				d = true;
				f = c.x;
				j = c.y;
				pointIdx++;
			}
			else {
				j = points[(pointIdx+1) % numPoints];
				f = (points[pointIdx % numPoints].x + j.x) / 2;
				j = (points[pointIdx % numPoints].y + j.y) / 2;
				c = drawQuadraticCurve(ctx, c, points[pointIdx % numPoints], { x: f, y: j, q: true }, d);
				d = true;
				f = c.x;
				j = c.y;
			}
		}
	}
}

function drawQuadraticCurve(ctx, startPoint, controlPoint, endPoint, q) {
	if(q)
		ctx.lineTo(startPoint.x, startPoint.y);
	else
		ctx.moveTo(startPoint.x, startPoint.y);
	ctx.quadraticCurveTo(controlPoint.x, controlPoint.y, endPoint.x, endPoint.y);
	return endPoint;
}

function drawStrokeVectorLight(strokeVector, canvas) {
	let ctx = canvas.ctx;

	ctx.beginPath();
	strokeVector.strokes.forEach(stroke => drawStroke(stroke, canvas));
	ctx.fillStyle = "#cccccc";
	ctx.fill();
}

function aStrokeIdentifier(strokeIdentifier, c) {
	let a = -1;
	for(let d = 0; d <= c; d++)
		if((strokeIdentifier[d] & 128) == 0)
			a++;
	return a;
}

function gStrokeIdentifier(strokeIdentifier, c) {
	for(let i = 0; i < strokeIdentifier.length; i++) {
		if((stokeIdentifier[i] & 128) == 0) {
			if(c == 0)
				return i;
			c--;
		}
	}
	return -1;
}

function cStrokeIdentifier(strokeIdentifier, c) {
	let a = false;
	for(let i = 0; i < strokeIdentifier.length; i++) {
		if((strokeIdentifier[i] & 128) == 0) {
			a = strokeIdentifier[i] & 64;
			if(c == 0)
				break;
			c--;
		}
	}
	return a;
}

function zStrokeIdentifier(strokeIdentifier, c) {
	return (strokeIdentifier[c] & 64) ? true : cStrokeIdentifier(strokeIdentifier, aStrokeIdentifier(strokeIdentifier, c));
}

let speed = 5;

function cDrawStroke(stroke, canvas) {
	let ctx = canvas.ctx;
	if(stroke.a > stroke.n)
		stroke.b = 0;		//clearTimeout?
	else
		ctx.putImageData(stroke.m, stroke.minX, stroke.minY);
	
	stroke.a += speed;
	ctx.save();
	ctx.beginPath();
	ctx.rect(stroke.g, stroke.minY, stroke.a-stroke.g, stroke.maxY-stroke.minY);
	ctx.clip();
	ctx.beginPath();
	drawStroke(stroke, canvas);
	ctx.fill();
	ctx.restore();
	stroke.b = setTimeout(() => cDrawStroke(stroke, canvas), 20);
}

function aDrawStroke(stroke, canvas) {
	let ctx = canvas.ctx;
	if(stroke.a > stroke.n)
		stroke.b = 0;		//clearTimeout?
	else
		ctx.putImageData(stroke.m, stroke.minX, stroke.minY);
	
	stroke.a += speed;
	ctx.save();
	ctx.beginPath();
	ctx.rect(stroke.minX, stroke.g, stroke.maxX-stroke.minX, stroke.a-stroke.g);
	ctx.clip();
	ctx.beginPath();
	drawStroke(stroke, canvas);
	ctx.fill();
	ctx.restore();
	stroke.b = setTimeout(() => aDrawStroke(stroke, canvas), 20);
}

function dDrawStroke(stroke, canvas) {
	let ctx = canvas.ctx;
	if(stroke.a < stroke.n)
		stroke.b = 0;		//clearTimeout?
	else
		ctx.putImageData(stroke.m, stroke.minX, stroke.minY);

	stroke.a -= speed;
	ctx.save();
	ctx.beginPath();
	ctx.rect(stroke.a, stroke.minY, stroke.g-stroke.a, stroke.maxY-stroke.minY);
	ctx.clip();
	ctx.beginPath();
	drawStroke(stroke, canvas);
	ctx.fill();
	ctx.restore();
	stroke.b = setTimeout(() => dDrawStroke(stroke, canvas), 20);
}

function fDrawStroke(stroke, canvas) {
	let ctx = canvas.ctx;
	if(stroke.a < stroke.n)
		stroke.b = 0;		//clearTimeout?
	else
		ctx.putImageData(stroke.m, stroke.minX, stroke.minY);
	
	stroke.a -= speed;
	ctx.save();
	ctx.beginPath();
	ctx.rect(stroke.minX, stroke.a, stroke.maxX-stroke.minX, stroke.g-stroke.a);
	ctx.clip();
	ctx.beginPath();
	drawStroke(stroke, canvas);
	ctx.fill();
	ctx.restore();
	stroke.b = setTimeout(() => fDrawStroke(stroke, canvas), 20);
}

function oStroke(stroke, b, canvas) {
	//c = minX, k = maxX, d = minY, l = maxY

	let ctx = canvas.ctx;
	stroke.m = ctx.getImageData(stroke.minX, stroke.minY, stroke.maxX-stroke.minX, stroke.maxY-stroke.minY);
	
	switch(b & 3) {
		case 0: {		//left to right
			stroke.g = stroke.a = stroke.minX;
			stroke.n = stroke.maxX;
			cDrawStroke(stroke, canvas);
			break;
		}

		case 1: {		//top to bottom
			stroke.g = stroke.a = stroke.minY;
			stroke.n = stroke.maxY;
			aDrawStroke(stroke, canvas);
			break;
		}

		case 2: {		//right to left
			stroke.g = stroke.a = stroke.maxX;
			stroke.n = stroke.minX;
			dDrawStroke(stroke, canvas);
			break;
		}

		case 3: {		//bottom to top
			stroke.g = stroke.a = stroke.maxY;
			stroke.n = stroke.minY;
			fDrawStroke(stroke, canvas);
			break;
		}
	}
}

//d, f, a
function drawStrokeVectorReal(strokeVector, strokeIdentifier, canvas) {
	const transientColor = "#000000",
		  strokeColor = "#000000",
		  radicalColor = "#ff3333";
	let ctx = canvas.ctx;

	if(strokeVector.a == -1  ||  strokeVector.strokes[strokeVector.a].b != 0) {
		if(strokeVector.a >= 0  &&  !(strokeVector.a < strokeIdentifier.length  &&  strokeVector[strokeVector.a + 1] & 128)  &&  transientColor.length  &&  !strokeVector.t) {
			strokeVector.b = setTimeout(function() {
				let b = gStrokeIdentifier(aStrokeIdentifier(strokeIdentifier, strokeVector.a));
				strokeVector.t = true;

				if(b >= 0) {
					for(let e = b; e <= strokeVector.a; e++)
						if(strokeVector.strokes[e].m)
							ctx.putImageData(strokeVector.strokes[e].m, strokeVector.strokes[e].minX, strokeVector.strokes[e].minY);
					for(let e = b; e <= strokeVector.a; e++) {
						ctx.save();
						ctx.beginPath();
						drawStroke(strokeVector.strokes[e]);
						b = strokeColor;
						if(zStrokeIdentifier(e))
							b = radicalColor;
						ctx.fillStyle = b;
						ctx.fill();
						ctx.restore();
					}
				}
				drawStrokeVectorReal(strokeVector, strokeIdentifier, canvas);
			}, 200);
			return;
		}

		if(++strokeVector.a < strokeIdentifier.length) {
			strokeVector.t = false;
			let e = transientColor;
			if(e.length != 0) {
				e = strokeColor;
				if(zStrokeIdentifier(strokeVector.a))
					e = radicalColor;
			}
			ctx.fillStyle = e;
			e = strokeIdentifier[strokeVector.a];
			if((e & 128) != 0)
				oStroke(strokeVector.strokes[strokeVector.a], e, canvas);
			else {
				strokeVector.b = setTimeout(function() {
					oStroke(strokeVector.strokes[strokeVector.a], strokeIdentifier[strokeVector.a], canvas);
					strokeVector.b = setTimeout(function() {
						drawStrokeVectorReal(strokeVector, strokeIdentifier, canvas);
					}, 10);
				}, 500);
				return;
			}
		}
		else {
			strokeVector.b = 0;
			return;
		}
	}
	
	strokeVector.b = setTimeout(function() {
		drawStrokeVectorReal(strokeVector, strokeIdentifier, canvas);
	}, 10);
}

function drawStrokeVector(strokeVector, strokeIdentifier, canvas) {
	strokeVector.a = -1;
	if(strokeIdentifier.length != 0)
		drawStrokeVectorReal(strokeVector, strokeIdentifier, canvas);
}




$(document).ready(function() {
	//let strokeOrderCanvas = getCanvas("#stroke-order-canvas");
	let strokeOrderCanvas = getCanvas("#eStroke");

	$.getJSON("/strokeorder/我").then(res => {
		res.forEach(character => {
			drawCharacterGrid(strokeOrderCanvas);

			let strokeVector = parseStrokeVector(character.strokeVector);
			let strokeIdentifier = parseStrokeIdentifier(character.strokeIdentifier);

			console.log(strokeVector);
			console.log(strokeIdentifier);
			//drawStrokeVectorLight(strokeVector, strokeOrderCanvas);
			//drawStrokeVector(strokeVector, strokeIdentifier, strokeOrderCanvas);
		});
	});
});
