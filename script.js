/**
 * Created by Danil on 19.04.2017.
 */

var Utils = (function () {
	'use strict';
	
	function isNumber(value) {
		return typeof value === 'number' && !isNaN(value);
	}
	
	return {
		isNumber: isNumber
	};
}());

var Calculator = (function (Utils) {
	'use strict';
	
	var result = 0;
	
	function getInitialState(callback) {
		setTimeout(function () {
			callback();
		}, 500);
	}
	
	function add() {
		for (let i = 0; i < arguments.length; i++) {
			if (!Utils.isNumber(arguments[i])) {
				throw new Error('Not a Number');
			}
			
			result += arguments[i];
		}
		
		return add;
	}
	
	function subtract() {
		for (var i = 0; i < arguments.length; i++) {
			if (!Utils.isNumber(arguments[i])) {
				throw new Error('Not a Number');
			}
			
			result -= arguments[i];
		}
		
		return subtract;
	}
	
	function divide() {
		for (var i = 0; i < arguments.length; i++) {
			if (!Utils.isNumber(arguments[i])) {
				throw new Error('Not a Number');
			}
			
			result /= arguments[i];
		}
		
		return divide;
	}
	
	function multiply() {
		for (let i = 0; i < arguments.length; i++) {
			if (!Utils.isNumber(arguments[i])) {
				throw new Error('Not a Number');
			}
			
			result *= arguments[i];
		}
		
		return multiply;
	}
	
	function getResult() {
		return result;
	}
	
	function reset() {
		result = 0;
	}
	
	return {
		add: add,
		subtract: subtract,
		divide: divide,
		multiply: multiply,
		getResult: getResult,
		reset: reset,
		getInitialState: getInitialState
	};
})(Utils);

for (var prop in Calculator) {
	if (typeof Calculator[prop] === 'function') {
		// Calculator[prop] = Calculator[prop].bind(Calculator);
	}
}

Calculator.add = Calculator.add.bind(Calculator);
Calculator.reset = Calculator.reset.bind(Calculator);

Calculator.reset();
// Calculator.add(5).add(5);
console.log(Calculator.add(5));//.reset().getResult());
// Calculator.getInitialState();
console.log(Calculator.getResult());