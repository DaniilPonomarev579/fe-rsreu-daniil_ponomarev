/**
 * Created by Danil on 13.04.2017.
 */

//1. Write a function which defines if a given value is a number.
//Use this function in the next tasks to define if a given value is a number;

function isNumber(value) {
	'use strict';
	
	return typeof value === 'number' && isFinite(value);
}

//console.log(isNumber("JavaScript")); // false
//console.log(isNumber (2)); // true

//2. Write a function which defines if a given number is negative or not.
//Do not forget to check if the given value is a number.

function isNegative(number) {
	"use strict";
	
	return isNumber(number) && number < 0;
}

window.console.log(isNegative(2)); // false
window.console.log(isNegative(-2)); // true

//3. Write a function which defines if a given number is positive or not.
//Do not forget to check if the given value is a number.

function isPositive(number) {
	"use strict";
	
	return isNumber(number) && number > 0;
}

//console.log(isPositive(2)); // true
//console.log(isPositive(-2)); // false

//4. Write a function which calculates a factorial for a given number
//(use recursion in your algorithm). Do not forget to check if the given
//value is a number.

function calculateFactorial(number) {
	"use strict";
	
	if (!isNumber(number)) {
		throw new Error('Not a Number');
	}
	
	if (!isPositive(number)) {
		throw new Error('It\'s possible to calculate factorial ' +
				'of a positive number');
	}
	
	return number === 1 ? number : number * calculateFactorial(number - 1);
}

window.console.log(calculateFactorial(5));

//5. Write a function which returns if the number is prime or not.
// Do not forget to check if the given value is a number.

function isPrime(number) {
	"use strict";
	
	if (!isNumber(number)) {
		throw new Error('Not a Number');
	}
	
	if (number === 2) {
		return true;
	} else if (number >= 1) {
		for (var i = 2; i < number; i++) {
			if (number % i === 0) {
				return false;
			}
		}
	} else {
		return false;
	}
	
	return true;
}

window.console.log(isPrime(5));

//1. Write a function which defines if a given value is a string.
// Use this function in the next tasks to define if a given value is a string;

function isString(value) {
	"use strict";
	
	return typeof value === 'string';
}

//console.log(isString("JavaScript")); // true
//console.log(isString(2)); // false

//2. Write a function which defines if a given value can be casted to a number;

function canParseToNumber(value) {
	"use strict";
	
	if (!isString(value)) {
		throw new Error('Not a string');
	}
	
	if (value === '') {
		return false;
	}
	
	for (var i = 0; i < value.length; i++) {
		if (!(value[i] in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])) {
			return false;
		}
	}
	return true;
}

window.console.log(canParseToNumber("2")); // true

//3. Write a function which returns a given string length.
// Do not forget to check if the given value is a string;

function getStringLength(value) {
	"use strict";
	
	if (!isString(value)) {
		throw new Error('Not a string');
	}
	
	return value.length;
}

window.console.log(getStringLength("JS")); // 2

//4. Write a JavaScript function to convert a string into camel case;

function camelize(value) {
	"use strict";
	
	if (!isString(value)) {
		throw new Error('Not a string');
	}
	
	var words = value.split(' ');
	var result = '';
	
	for (var i = 0; i < words.length; i++) {
		words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
		result += words[i];
	}
	
	return result;
}

window.console.log(camelize("Java Script")); // "JavaScript"

//5. Write a JavaScript function to capitalize the first letter of a string;

function capitalize(value) {
	"use strict";
	
	if (!isString(value)) {
		throw new Error('Not a string');
	}
	
	return value.charAt(0).toUpperCase() + value.slice(1);
}

window.console.log(capitalize("javaScript")); // "JavaScript"

//6. Write a JavaScript function which return the number
// of occurrences of a given substring in a string.

// TODO logic

function findOccurrences(substring, string) {
	"use strict";
	
	if (!isString(string) || !isString(substring)) {
		throw new Error('Not a string');
	}
	
	if (substring === '' || !~string.toUpperCase().indexOf(substring.toUpperCase())) {
		return 0;
	}
	
	return string.toUpperCase().indexOf(substring.toUpperCase()) + 1;
}

//console.log(findOccurrences("a", 'JavaScript')); // 2
//console.log(findOccurrences("ja", 'JavaScript')); // 1
//console.log(findOccurrences("", 'JavaScript')); // 0
//console.log(findOccurrences("b", 'JavaScript')); // 0

//1. Write a function which defines if a given value is an array. Use this
// function in the next tasks to define if a given value is an array;

function isArray(value) {
	"use strict";
	
	return Object.prototype.toString.call(value) === '[object Array]';
}

// console.log(isArray([])); // true
// console.log(isArray(2)); // false

//2. Write a JavaScript function to remove. 'null', '0', '""',
// 'false', 'undefined' and 'NaN' values from an array

function clearArray(value) {
	"use strict";
	
	if (!isArray(value)) {
		throw new Error('Not an array');
	}
	
	return value.filter(function (item) {
		return item;
	});
}

window.console.log(clearArray([null, 0, 'null', '', 10, false, undefined, NaN, 5]));

//3. Write a JavaScript function to find the highest value in an array

function findMax(value) {
	"use strict";
	
	if (!isArray(value)) {
		throw new Error('Not an array');
	}
	
	return value.reduce(function (max, currentItem) {
		return currentItem > max ? currentItem : max;
	});
}

window.console.log(findMax([null, 15, 0, 'null', '', 10, false, undefined, NaN, 5]));

//4. Write a JavaScript function to find the lowest value in an array

function findMin(value) {
	"use strict";
	
	if (!isArray(value)) {
		throw new Error('Not an array');
	}
	
	return value.reduce(function (min, currentItem) {
		return currentItem < min ? currentItem : min;
	});
}

window.console.log(findMin([0, 10, -15, 5]));

//5. Write a JavaScript function to split a string and
// convert it into an array of words;

function splitString(value) {
	"use strict";
	
	if (!isString(value)) {
		throw new Error('Not a string');
	}
	
	return value.split(' ');
}

window.console.log(splitString('aaa bbb ccc'));

//6. Write a JavaScript function to find the most frequent item of an array.

function findTheMostFrequentItem(value) {
	"use strict";
	
	if (!isArray(value)) {
		throw new Error('Not an array');
	}
	
	var frequency = 0;
	var maxFrequency = 0;
	var item;
	
	for (var i = 0; i < value.length; i++) {
		frequency = 0;
		
		for (var j = i; j < value.length; j++) {
			if (value[i] === value[j]) {
				frequency++;
			}
		}
		
		if (frequency > maxFrequency) {
			maxFrequency = frequency;
			item = value[i];
		}
	}
	
	return item;
}

window.console.log(findTheMostFrequentItem([1, 2, 1, 2, 1, 3, 3, 2, 2, 3]));

//7. Write a JavaScript function to clone an array

function cloneArray(value) {
	"use strict";
	
	if (!isArray(value)) {
		throw new Error('Not an array');
	}
	
	return value.slice();
}

var array = [1, 2, 3];
var array2 = cloneArray(array);

//8. Write a JavaScript program to remove duplicate strings
// from a string array (ignore case sensitivity)

function removeDuplicateStrings(value) {
	"use strict";
	
	if (!isArray(value)) {
		throw new Error('Not an array');
	}
	
	value.forEach(function (item) {
		if (!isString(item)) {
			throw new Error('Only string arrays allowed');
		}
	});
	
	for (var i = 0; i < value.length; i++) {
		for (var j = i + 1; j < value.length; j++) {
			if (value[i] === value[j]) {
				value.splice(i, 1);
				i--;
				break;
			}
		}
	}
	
	return value;
}

window.console.log(removeDuplicateStrings(['1', '2', '3', '4', '5', '1', '2', '3']));

//9. Write a JavaScript function to merge two arrays and
// removes all duplicates elements

function mergeArrays(value1, value2) {
	"use strict";
	
	if (!isArray(value1) || !isArray(value2)) {
		throw new Error('Not an array');
	}
	
	var value = [];
	
	value = value.concat(value1, value2);
	
	for (var i = 0; i < value.length; i++) {
		for (var j = i + 1; j < value.length; j++) {
			if (value[i] === value[j]) {
				value.splice(i, 1);
				i--;
				break;
			}
		}
	}
	
	return value;
}

window.console.log(mergeArrays([1, 2, 3, 4, 5, 1, 2], [2, 4, 6, 4, 7, 3, 5]));

//10. Write a JavaScript function to remove a specific element from an array

function removeElement(value, index) {
	"use strict";
	
	if (!isArray(value)) {
		throw new Error('Not an array');
	}
	
	if (!isNumber(index)) {
		throw new Error('Not a number');
	}
	
	value.splice(index, 1);
	
	return value;
}

window.console.log(removeElement(['1', '2', '3', '4', '5', '1', '2', '3'], 2));

// 11. Write a JavaScript function to sort the following array of objects by
// title value using ‘sort’ method

function sortByTitle(value1, value2) {
	"use strict";
	
	return value1.title > value2.title ? 1 : -1;
}

var library = [
	{author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
	{author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
	{
		author: 'Suzanne Collins',
		title: 'Mockingjay: The Final Book of The Hunger Games',
		libraryID: 3245
	}
];

window.console.log(library.sort(sortByTitle));


function isObject(value) {
	"use strict";
	
	return typeof value === 'object';
}

//1. Write a JavaScript program to get the length of a JavaScript object

function getObjectLength(value) {
	"use strict";
	
	if (!isObject(value)) {
		throw new Error('Not an object');
	}
	
	return Object.keys(value).length;
}

var book = {author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264};
window.console.log(getObjectLength(book));

//2. Write a JavaScript program to list the properties of a JavaScript object

// TODO all properties in the inner objects

function logObjectProperties(value) {
	"use strict";
	
	if (!isObject(value)) {
		throw new Error('Not an object');
	}
	
	for (var key in value) {
		window.console.log('key: ' + key + '; value: ' + value[key]);
	}
	
	return 0;
}

// Write a JavaScript program to list the properties of a JavaScript object
// including inner objects

logObjectProperties(book);

function isDate(value) {
	"use strict";
	
	return Object.prototype.toString.call(value) === '[object Date]';
}

//1. Write a JavaScript function to get difference between two dates in days.

function getDifferenceInDays(date1, date2) {
	"use strict";
	
	if (!isDate(date1) || !isDate(date2)) {
		throw new Error('Not a date');
	}
	
	return Math.floor((date1 - date2) / (1000 * 3600 * 24));
}

var now = new Date();
var past = new Date(2017, 3, 14);
window.console.log(getDifferenceInDays(now, past));

//2. Write a JavaScript function gets the current date.

function getCurrentDate() {
	"use strict";
	
	return new Date();
}

now = getCurrentDate();

//3. Write a JavaScript function which displays the current day and time
// in the following format.

// TODO Return string

function formatDate(date) {
	"use strict";
	
	if (!isDate(date)) {
		throw new Error('Not a date');
	}
	
	var options = {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit'
	};
	
	//return date.toLocaleString('en-US', options);
	
	return date.getDay() + 'Day';
	
	return `
		${date.getDay()} Day
	`;
}

window.console.log(formatDate(new Date())); // Oct 22 2016, 11:45