/**
 * Created by Danil on 11.04.2017.
 */

function isNumber(value) {
	return typeof value === 'number' && isFinite(value);
}

function isArray(array) {
	return Object.prototype.toString.call(array) === '[object Array]';
}

function calcTriangleArea(a, h) {
	"use strict";
	
	if (!isNumber(a) || !isNumber(h)) {
		throw new Error('a and h should be numbers');
	}
	
	if (a < 0 || h < 0) {
		throw new Error('a and h should be > 0');
	}
	
	return (a * h / 2);
}

function reverseArrayWithFor(array) {
	"use strict";
	
	if (!isArray(array)) {
		return 'not an array';
	}
	
	for (i = 0; i < array.length / 2; i++) {
		var t = array[i];
		array[i] = array[array.length - i - 1];
		array[array.length - i - 1] = t;
	}
	
	return array;
}

function reverseArrayWithWhile(array) {
	"use strict";
	
	if (!isArray(array)) return 'not an array';
	
	while (i != 0) {
		i--;
		var t = array[i];
		array[i] = array[array.length - i - 1];
		array[array.length - i - 1] = t;
	}
	
	return array;
}

function reverseArrayWithDoWhile(array) {
	"use strict";
	
	if (!isArray(array)) return 'not an array';
	
	do {
		var t = array[i];
		array[i] = array[array.length - i - 1];
		array[array.length - i - 1] = t;
		i++;
	} while (i < array.length / 2);
	
	return array;
}

function explainIncrementDifference() {
	"use strict";
	
	var i1 = 0, i2 = 0;
	
	console.log('Initial values: ' + i1 + ', ' + i2);
	console.log('Intermediate values: ' + i1++ + ', ' + ++i2);
	console.log('Final values: ' + i1 + ', ' + i2);
}

function checkNumberSign(number) {
	"use strict";
	
	if (!isNumber(number)) return 'not a number';
	
	if (number > 0) {
		return 'positive';
	}
	else if (number < 0) {
		return 'negative';
	}
	else if (number === 0) {
		return 'zero';
	}
}

function countFactorial(number) {
	"use strict";
	
	if (!isNumber(number)) {
		throw new Error('Can\'t count the factorial');
	}
	
	return number <= 1 ?  number :  number*countFactorial(number-1);
}

var a = 5;
var h = 10;
console.log('Triangle side = ' + a + ';\nTriangle height = ' + h);
console.log('Triangle area = ' + calcTriangleArea(a, h));

var array = [];
for (var i = 0; i < 10; i++) {
	array[i] = i;
}
console.log('Initial array: ' + array);
console.log('Reversed array 1: ' + reverseArrayWithFor(array));
console.log('Reversed array 2: ' + reverseArrayWithWhile(array));
console.log('Reversed array 3: ' + reverseArrayWithDoWhile(array));

explainIncrementDifference();

var number = 3;
console.log('The number is ' + checkNumberSign(number));

var name = prompt('What\'s your name?');
alert(name);

console.log('Factorial of ' + number + ' = ' + countFactorial(number));