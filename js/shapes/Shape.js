/**
 * Created by Danil on 28.05.2017.
 */

function Shape(type) {
	'use strict';
	
	let _type;
	
	this.setType = function (type) {
		_type = type;
	};
	
	this.getType = function () {
		return _type;
	};
	
	this.setType(type);
}

Shape.prototype.getPerimeter = function () {
	'use strict';
	
	return 0;
};

Shape.prototype.draw = function () {
	'use strict';
	
	console.log('Shape');
};

class Shape2 {
	constructor(type) {
		this._type = type;
	}
	
	setType(type) {
		this._type = type;
	}
	
	getType(){
		return this._type;
	}
	
	draw(){
		console.log('Shape2');
	}
}

let shape2 = new Shape2('Shape');
shape2.draw();