let bgcolor = "#ffffff";
let charGridColor = "#cccccc";
let transientColor = "#000000";
let strokeColor = "#000000";
let radicalColor = "#ff3333";
let charGridType = "Nine Square";
let speed = 10;
let logicalStrokes = [];
let strokeParts = [];

function getLogicalStrokes() {
	logicalStrokes = logicalStrokes.map(ls => ls.filter(sp => Object.keys(sp).length != 0));
	return logicalStrokes;
}

function getLogicalStrokePart(index) {
	return strokeParts[index];
}

function addLogicalStroke(points) {
	let newStrokePart = {points: points};
	logicalStrokes.push([newStrokePart]);
	strokeParts.push(newStrokePart);
}

function addLogicalStrokePart(points) {
	let newStrokePart = {points: points}; 
	logicalStrokes[logicalStrokes.length - 1].push(newStrokePart);
	strokeParts.push(newStrokePart);
}



var m = 0;
var s = 0;

//phrase animate
function phraseAnimate(c, a, d) {
	function f(b) {
		drawCharacterGrid("eStroke");
		b.f = new StrokeVector;
		b.f.parse(b.u[b.p]);
		logicalStrokes = [];
		var a = new StrokeIdentifier;
		a.parse(b.s[b.p]);
		b.f.i("eStroke");
		b.f.o("eStroke", a);
		b.b = setTimeout(function() {
			e(b)
		}, 10)
	}

	function e(b) {
		!b.f || !b.f.r() ? (++b.p,
		b.b = b.p >= b.s.length ? 0 : setTimeout(function() {
			animTimer = setTimeout(function() {
				f(b)
			}, 500)
		}, 500)) : b.b = setTimeout(function() {
			e(b)
		}, 10)
	}

	s && s.j();
	s = this;
	this.u = c;
	this.D = d;
	this.s = a;
	this.f = this.p = 0;
	clearTimeout(this.b);
	c.length && f(this);
	this.j = function() {
		clearTimeout(this.b);
		this.f && this.f.j()
	}
}

//draw character grid
function drawCharacterGrid(c) {
	c = document.getElementById(c);
	var a = c.getContext("2d");
	a.setLineDash([10, 2, 2, 2]);
	a.beginPath();
	a.fillStyle = bgcolor;
	a.fillRect(0, 0, c.width, c.width);
	a.beginPath();
	switch(charGridType) {
		case "Star": {
			a.moveTo(0, 0);
			a.lineTo(c.width, c.width);
			a.moveTo(c.width, 0);
			a.lineTo(0, c.width);
			a.moveTo(c.width / 2, 0);
			a.lineTo(c.width / 2, c.width);
			a.moveTo(0, c.width / 2);
			a.lineTo(c.width, c.width / 2);
			break;
		}

		case "Four Square": {
			a.moveTo(0, 0);
			a.moveTo(c.width / 2, 0);
			a.lineTo(c.width / 2, c.width);
			a.moveTo(0, c.width / 2);
			a.lineTo(c.width, c.width / 2);
			break;
		}

		case "Nine Square": {
			a.moveTo(0, 0);
			a.moveTo(c.width / 3, 0);
			a.lineTo(c.width / 3, c.width);
			a.moveTo(2 * c.width / 3, 0);
			a.lineTo(2 * c.width / 3, c.width);
			a.moveTo(0, c.width / 3);
			a.lineTo(c.width, c.width / 3);
			a.moveTo(0, 2 * c.width / 3);
			a.lineTo(c.width, 2 * c.width / 3);
			break;
		}
	}
	a.strokeStyle = charGridColor;
	a.stroke()
};

//point with x, y and q
function Point(c, a, d) {
	this.x = c;
	this.y = a;
	this.q = d
}

function Stroke() {
	function c(a, b) {
		b.a > b.n ? b.b = 0 : (a.putImageData(b.m, b.c, b.d),
		b.a += eval(speed),
		a.save(),
		a.beginPath(),
		a.rect(b.g, b.d, b.a - b.g, b.l - b.d),
		a.clip(),
		a.beginPath(),
		b.i(a),
		a.fill(),
		a.restore(),
		b.b = setTimeout(function() {
			c(a, b)
		}, 0))		//duration between animation frames (default: 20 ms)
	}

	function a(e, b) {
		b.a > b.n ? b.b = 0 : (e.putImageData(b.m, b.c, b.d),
		b.a += eval(speed),
		e.save(),
		e.beginPath(),
		e.rect(b.c, b.g, b.k - b.c, b.a - b.g),
		e.clip(),
		e.beginPath(),
		b.i(e),
		e.fill(),
		e.restore(),
		b.b = setTimeout(function() {
			a(e, b)
		}, 0))
	}

	function d(a, b) {
		b.a < b.n ? b.b = 0 : (a.putImageData(b.m, b.c, b.d),
		b.a -= eval(speed),
		a.save(),
		a.beginPath(),
		a.rect(b.a, b.d, b.g - b.a, b.l - b.d),
		a.clip(),
		a.beginPath(),
		b.i(a),
		a.fill(),
		a.restore(),
		b.b = setTimeout(function() {
			d(a, b)
		}, 0))
	}

	function f(a, b) {
		b.a < b.n ? b.b = 0 : (a.putImageData(b.m, b.c, b.d),
		b.a -= eval(speed),
		a.save(),
		a.beginPath(),
		a.rect(b.c, b.a, b.k - b.c, b.g - b.a),
		a.clip(),
		a.beginPath(),
		b.i(a),
		a.fill(),
		a.restore(),
		b.b = setTimeout(function() {
			f(a, b)
		}, 0))
	}

	this.c = 1E4;
	this.k = 0;
	this.d = 1E4;
	this.m = this.H = this.l = 0;
	this.w = [];
	this.add = function(a) {
		this.c > a.x && (this.c = a.x);
		this.k < a.x && (this.k = a.x);
		this.d > a.y && (this.d = a.y);
		this.l < a.y && (this.l = a.y);
		this.w.push(a)
	};

	this.r = function() {
		return 0 != this.b
	};
	
	this.j = function() {
		clearTimeout(this.b)
	};

	this.F = function(a) {
		this.m && a.putImageData(this.m, this.c, this.d)
	};

	this.o = function(e, b, index) {
		this.m = e.getImageData(this.c, this.d, this.k - this.c, this.l - this.d);
		switch (b & 3) {
			case 0:
				this.g = this.c;
				this.n = this.k;
				this.a = this.n;	//before: g
				c(e, this);
				break;
			case 1:
				this.g = this.d;
				this.n = this.l;
				this.a = this.n;
				a(e, this);
				break;
			case 2:
				this.g = this.k;
				this.n = this.c;
				this.a = this.n;
				d(e, this);
				break;
			case 3:
				this.g = this.l,
				this.n = this.d,
				this.a = this.n,
				f(e, this)
		}

		getLogicalStrokePart(index).direction = ["leftToRight", "topToBottom", "rightToLeft", "bottomToTop"][b & 3];
		getLogicalStrokePart(index).duration = Math.abs(this.a - this.n);
	};
	
	this.i = function(a) {
		var b = this.w, d = !1, c;
		if (b[0].q)
			c = b[0];
		else if (b[1].q) {
			var f = (b[0].x + b[1].x) / 2
			  , j = (b[0].y + b[1].y) / 2;
			c = new Point(f,j,1)
		} else
			c = b[0];
		for (var f = c.x, j = c.y, k = b.length, h = 1; h <= k; ++h) {
			var u = b[h % k].x
			  , v = b[h % k].y;
			if (b[h % k].q) {
				if (1 < h || 1 == h && b[0].q)
					d ? a.lineTo(f, j) : (a.moveTo(f, j),
					d = !0),
					a.lineTo(u, v);
				f = u;
				j = v;
				c = b[h % k]
			} else
				b[(h + 1) % k].q ? (c = this.v(a, c, b[h % k], b[(h + 1) % k], d),
				d = !0,
				f = c.x,
				j = c.y,
				++h) : (j = b[(h + 1) % k],
				f = (b[h % k].x + j.x) / 2,
				j = (b[h % k].y + j.y) / 2,
				c = this.v(a, c, b[h % k], new Point(f,j,1), d),
				d = !0,
				f = c.x,
				j = c.y)
		}
	};
	
	this.v = function(a, b, c, d, f) {
		var j = b.x;
		b = b.y;
		f ? a.lineTo(j, b) : a.moveTo(j, b);
		a.quadraticCurveTo(c.x, c.y, d.x, d.y);
		return d
	}
}

//stroke vector decoder and parser
function StrokeVector() {
	function c(a, d, f) {
		if (-1 == d.a || !d.h[d.a].r()) {
			if (0 <= d.a && !(d.a < f.e.length && f.e[d.a + 1] & 128) && transientColor.length && !d.t) {
				d.b = setTimeout(function() {
					d.t = !0;
					var b = f.G(f.A(d.a));
					if (0 <= b) {
						for (var e = b; e <= d.a; ++e)
							d.h[e].F(a);
						for (e = b; e <= d.a; ++e) {
							a.save(),
							a.beginPath(),
							d.h[e].i(a),
							b = strokeColor,
							f.z(e) && (b = radicalColor),
							a.fillStyle = b,
							a.fill(),
							a.restore();

							getLogicalStrokePart(e).isRadical = (b == radicalColor);
						}
					}
					c(a, d, f)
				}, 0);		//duration before radical stroke becomes red (default: 200 ms)
				return
			}
			if (++d.a < f.e.length) {
				d.t = !1;
				var e = transientColor;
				e.length || (e = strokeColor,
				f.z(d.a) && (e = radicalColor));
				a.fillStyle = e;
				e = f.e[d.a];

				if (e & 128) {
					addLogicalStrokePart(d.h[d.a].w);
					logicalStrokes[logicalStrokes.length-1].push({});
					d.h[d.a].o(a, e, d.a);
				}
				else {
					d.b = setTimeout(function() {
						addLogicalStroke(d.h[d.a].w);
						d.h[d.a].o(a, f.e[d.a], d.a);
						d.b = setTimeout(function() {
							c(a, d, f)
						}, 0)			//duration between strokes in a group (default: 10 ms)
					}, 0);				//duration between strokes (default: 500 ms)
					return
				}
			} else {
				d.b = 0;
				return
			}
		}
		d.b = setTimeout(function() {
			c(a, d, f)
		}, 0)							//duration between every stroke (default: 10 ms)
	}
	this.h = [];
	this.add = function(a) {
		this.h.push(a)
	};
	
	this.B = function(a) {
		for (var c = a.length, f = Math.floor(c / 3), e = "", b = 0; b < a.length; ++b) {
			var g = b - f;
			0 > g && (g += c);
			e = e.concat(String.fromCharCode(a.charCodeAt(g) ^ "Copyright EON Media Limited 1999-2006 - http://www.eon.com.hk, Unit C, 13/F Skyview Cliff, 49 Conduit Road MidLevels Hong Kong. All Rights Reserved".charCodeAt(g % 147) & 15))
		}
		return e
	};
	
	this.parse = function(a) {
		this.c = 1E4;
		this.k = 0;
		this.d = 1E4;
		this.l = 0;
		this.a = -1;
		this.b = 0;
		this.t = !1;
		a = this.B(a);
		for (var c = 2; c < a.length; ) {
			for (var f = new Stroke, e = parseInt(a.substr(c, 3), 10), c = c + 3, b = 0; b < e; ++b) {
				var g = parseInt(a.substr(c, 4), 16)
				  , g = g ^ 62953;
				32267 < g && (g -= 65536);
				this.c > g && (this.c = g);
				this.k < g && (this.k = g);
				var c = c + 4
				  , l = parseInt(a.substr(c, 4), 16)
				  , l = l ^ 10935;
				32267 < l && (l -= 65536);
				this.d > l && (this.d = l);
				this.l < l && (this.l = l);
				c += 4;
				f.add(new Point(g,l,"1" == a.charAt(c)));
				++c
			}
			this.add(f)
		}
	};
	
	this.i = function(a) {
		a = document.getElementById(a).getContext("2d");
		a.beginPath();
		for (var c = 0; c < this.h.length; ++c)
			this.h[c].i(a);
		a.fillStyle = "#cccccc";
		a.fill()
	};

	this.o = function(a, d) {
		var f = document.getElementById(a).getContext("2d");
		this.a = -1;
		d.e.length && c(f, this, d)
	};

	this.r = function() {
		return 0 != this.b
	};
	
	this.j = function() {
		clearTimeout(this.b);
		for (var a = 0; a < this.h.length; ++a)
			this.h[a].j()
	}
};

//stroke identifier processor
function StrokeIdentifier() {
	this.e = [];
	this.parse = function(c) {
		for (var a = 0; a < c.length; a += 2)
			this.e.push(parseInt(c.substr(a, 2), 16) & 255)
	};
	
	this.G = function(c) {
		for (var a = 0; a < this.e.length; ++a)
			if (!(this.e[a] & 128)) {
				if (0 == c)
					return a;
				--c
			}
		return -1
	};
	
	this.C = function(c) {
		for (var a = !1, d = 0; d < this.e.length; ++d)
			if (!(this.e[d] & 128)) {
				a = this.e[d] & 64;
				if (0 == c)
					break;
				--c
			}
		return a
	};
	
	this.z = function(c) {
		return this.e[c] & 64 ? !0 : this.C(this.A(c))
	};
	
	this.A = function(c) {
		for (var a = -1, d = 0; d <= c; ++d)
			this.e[d] & 128 || ++a;
		return a
	};
};
