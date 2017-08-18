var Utils = (function () {
	'use strict';
	
	function isNumber(value) {
		return typeof value === 'number' && !isNaN(value);
	}
	
	function isString(value) {
		return typeof value === 'string';
	}
	
	return {
		isNumber: isNumber,
		isString: isString
	};
})();