/**
 * Created by Danil on 28.05.2017.
 */

function Square(type, a, b, c, d) {
	'use strict';
	
	Shape.apply(this, arguments);
	
	Object.defineProperties(this, {
				perimeter: {
					get: function () {
						return a + b + c + d;
					},
					set: function (perimeter) {
						a = b = c = d = perimeter / 4;
					}
				},
				a: {
					get: function () {
						return a;
					},
					set: function (value) {
						a = value;
					}
				},
				b: {
					get: function () {
						return b;
					},
					set: function (value) {
						b = value;
					}
				},
				c: {
					get: function () {
						return c;
					},
					set: function (value) {
						c = value;
					}
				},
				d: {
					get: function () {
						return d;
					},
					set: function (value) {
						d = value;
					}
				}
			}
	);
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.draw = function () {
	'use strict';
	
	console.log('Square');
};