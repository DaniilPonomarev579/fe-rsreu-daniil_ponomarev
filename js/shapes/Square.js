/**
 * Created by Danil on 28.05.2017.
 */

function Square(type, a, b, c, d) {
	'use strict';
	
	this._type = type;
	
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.getPerimeter = function () {
	'use strict';
	
	Shape.prototype.getPerimeter.apply(this, arguments);
	
	return this.a + this.b + this.c + this.d;
};

Square.prototype.draw = function () {
	'use strict';
	
	console.log('Square');
};