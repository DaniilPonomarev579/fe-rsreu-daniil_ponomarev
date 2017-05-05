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
	
	function add() {
		for (let i = 0; i < arguments.length; i++) {
			if (!Utils.isNumber(arguments[i])) {
				throw new Error('Not a Number');
			}
			
			result += arguments[i];
		}
		
		return this;
	}
	
	function subtract() {
		for (var i = 0; i < arguments.length; i++) {
			if (!Utils.isNumber(arguments[i])) {
				throw new Error('Not a Number');
			}
			
			result -= arguments[i];
		}
		
		return this;
	}
	
	function divide() {
		for (var i = 0; i < arguments.length; i++) {
			if (!Utils.isNumber(arguments[i])) {
				throw new Error('Not a Number');
			}
			
			result /= arguments[i];
		}
		
		return this;
	}
	
	function multiply() {
		for (let i = 0; i < arguments.length; i++) {
			if (!Utils.isNumber(arguments[i])) {
				throw new Error('Not a Number');
			}
			
			result *= arguments[i];
		}
		
		return this;
	}
	
	function getResult() {
		return result;
	}
	
	function reset() {
		result = 0;
	}
	
	function setInitialState(arg) {
		result = arg;
	}
	
	function getInitialState(callback) {
		setTimeout(function () {
			callback.call(this, 500);
		}.bind(this), 500);
	}
	
	return {
		add: add,
		subtract: subtract,
		divide: divide,
		multiply: multiply,
		getResult: getResult,
		reset: reset,
		getInitialState: getInitialState,
		setInitialState: setInitialState
	};
})(Utils);

Calculator.reset();
Calculator.setInitialState(50);
Calculator.getInitialState(Calculator.setInitialState);
console.log(Calculator.add(10).subtract(5).multiply(5).divide(5).getResult());
console.log(Calculator.getResult());