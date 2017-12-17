let logicalStrokes, strokeParts;
let pointsSizeRef = 1;

function adjustPoints(pts) {
	return pts.map(p => ({x: p.x/pointsSizeRef, y: p.y/pointsSizeRef, q: p.q}));
}

function getLogicalStrokePart(index) {
	return strokeParts[index];
}

function addLogicalStroke(points) {
	let newStrokePart = { points: adjustPoints(points) };
	logicalStrokes.push([newStrokePart]);
	strokeParts.push(newStrokePart);
}

function addLogicalStrokePart(points) {
	let newStrokePart = { points: adjustPoints(points) }; 
	logicalStrokes[logicalStrokes.length - 1].push(newStrokePart);
	strokeParts.push(newStrokePart);
}



//point with x, y and q
function Point(c, a, d) {
	this.x = c;
	this.y = a;
	this.q = d
}

function Stroke() {
	this.c = 10000;
	this.k = 0;
	this.d = 10000;
	this.m = this.H = this.l = 0;
	this.w = [];
	this.add = function(a) {
		this.c > a.x && (this.c = a.x);
		this.k < a.x && (this.k = a.x);
		this.d > a.y && (this.d = a.y);
		this.l < a.y && (this.l = a.y);
		this.w.push(a)
	};

	this.o = function(e, b, index) {
		this.b = 0;
		this.n = [this.k, this.l, this.c, this.d][b & 3];
		this.a = [this.c, this.d, this.k, this.l][b & 3];
		getLogicalStrokePart(index).direction = ["leftToRight", "topToBottom", "rightToLeft", "bottomToTop"][b & 3];
		getLogicalStrokePart(index).duration = Math.abs(this.a - this.n) / pointsSizeRef;
	};
}

//stroke vector decoder and parser
function StrokeVector() {
	function c(a, d, f) {
		if (0 <= d.a && !(d.a < f.e.length && f.e[d.a + 1] & 128) && !d.t) {
			d.t = !0;
			var b = f.G(f.A(d.a));
			if (b >= 0)
				for (e = b; e <= d.a; ++e)
					getLogicalStrokePart(e).isRadical = !!f.z(e);
			c(a, d, f);
			return;
		}
		if (++d.a < f.e.length) {
			d.t = !1;
			e = f.e[d.a];

			if (e & 128) {
				addLogicalStrokePart(d.h[d.a].w);
				d.h[d.a].o(a, e, d.a);
			}
			else {
				addLogicalStroke(d.h[d.a].w);
				d.h[d.a].o(a, f.e[d.a], d.a);
				c(a, d, f);
				return;
			}
		} else {
			d.b = 0;
			return;
		}
		c(a, d, f);
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
		this.c = 10000;
		this.k = 0;
		this.d = 10000;
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

	this.o = function(a, d) {
		this.a = -1;
		d.e.length && c(null, this, d)
	};
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



exports.parseStroke = function(strokeVector, strokeIdentifier, newPointsSizeRef) {
	logicalStrokes = [];
	strokeParts = [];
	pointsSizeRef = newPointsSizeRef;

	let sv = new StrokeVector;
	let si = new StrokeIdentifier;
	
	sv.parse(strokeVector);
	si.parse(strokeIdentifier);
	sv.o(null, si);
	return logicalStrokes;
}
