/**
 * Created by Danil on 28.05.2017.
 */

function TriangleEquilateral(type, a) {
	'use strict';
	
	Triangle.call(this, type, a, a, a);
}

TriangleEquilateral.prototype = Object.create(Shape.prototype);
TriangleEquilateral.prototype.constructor = Triangle;

TriangleEquilateral.prototype.getPerimeter = function () {
	'use strict';
	
	Shape.prototype.getPerimeter.apply(this, arguments);
	
	return this.a*3;
};

TriangleEquilateral.prototype.draw = function () {
	'use strict';
	
	console.log('TriangleEquilateral');
};