/**
 * Created by Danil on 28.05.2017.
 */

function Triangle(type, a, b, c) {
	'use strict';
	
	Shape.apply(this, arguments);
	
	this.a = a;
	this.b = b;
	this.c = c;
}

Triangle.prototype = Object.create(Shape.prototype);
Triangle.prototype.constructor = Triangle;

Triangle.prototype.getPerimeter = function () {
	'use strict';
	
	Shape.prototype.getPerimeter.apply(this, arguments);
		
	return this.a + this.b + this.c;
};

Triangle.prototype.draw = function () {
	'use strict';
	
	console.log('Triangle');
};