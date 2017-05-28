/**
 * Created by Danil on 28.05.2017.
 */

function Shape(type) {
	'use strict';
	
	this._type = type;
}

Shape.prototype.getType = function () {
	'use strict';
	
	return this._type;
};

Shape.prototype.getPerimeter = function () {
	'use strict';
	
	return 0;
};

Shape.prototype.draw = function () {
	'use strict';
	
	console.log('Shape');
};