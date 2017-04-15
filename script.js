/**
 * Created by Danil on 13.04.2017.
 */

function isNumber(value) {
	"use strict";
	
	return typeof value === 'number' && isFinite(value);
}

function isNegative(number) {
	"use strict";
	
	return isNumber(number) && number < 0 ? true : false;
}

function isPositive(number) {
	"use strict";
	
	return isNumber(number) && number > 0 ? true : false;
}

function calculateFactorial(number) {
	"use strict";
	
	if (!isNumber(number)) {
		throw new Error('Not a Number');
	}
	
	if (!isPositive(number)) {
		throw new Error('It\'s possible to calculate factorial of a positive number');
	}
	
	return number == 1 ? number : number * calculateFactorial(number - 1);
}

function isPrime(number) {
	"use strict";
	
	if (!isNumber(number)) {
		throw new Error('Not a Number');
	}
	
	if (number === 2) {
		return true;
	} else if (number >= 1) {
		for (var i = 2; i < number; i++) {
			if (number % i == 0) {
				return false;
			}
		}
	}
	else {
		return false;
	}
	
	return true;
}

function isString(value) {
	"use strict";
	
	return typeof value === 'string';
}

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

function getStringLength(value) {
	"use strict";
	
	if (!isString(value)) {
		throw new Error('Not a string');
	}
	
	return value.length;
}

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

function capitalize(value) {
	"use strict";
	
	if (!isString(value)) {
		throw new Error('Not a string');
	}
	
	return value.charAt(0).toUpperCase() + value.slice(1);
}

//console.log(camelize('aaa Fdfdf fdfsdf Hdfdf aaa'));
//console.log(capitalize('aaa Fdfdf fdfsdf Hdfdf aaa'));

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

function isArray(value) {
	"use strict";
	
	return Object.prototype.toString.call(value) === '[object Array]';
}

function clearArray(value) {
	"use strict";
	
	if (!isArray(value)) {
		throw new Error('Not an array');
	}
	
	return value.filter(function (item) {
		return item;
	});
}

//console.log(clearArray([null, 0, 'null', '', 10, false, undefined, NaN, 5]));

function findMax(value) {
	"use strict";
	
	if (!isArray(value)) {
		throw new Error('Not an array');
	}
	
	return value.reduce(function (max, currentItem) {
		return currentItem > max ? currentItem : max;
	});
}

//console.log(findMax([null, 15, 0, 'null', '', 10, false, undefined, NaN, 5]));

function findMin(value) {
	"use strict";
	
	if (!isArray(value)) {
		throw new Error('Not an array');
	}
	
	return value.reduce(function (min, currentItem) {
		return currentItem < min ? currentItem : min;
	});
}

//console.log(findMin([0, 10, -15, 5]));

function splitString(value) {
	"use strict";
	
	if (!isString(value)) {
		throw new Error('Not a string');
	}
	
	return value.split(' ');
}

//console.log(splitString('aaa bbb ccc'));

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

//console.log(findTheMostFrequentItem([1, 2, 1, 2, 1, 3, 3, 2, 2, 3]));

function cloneArray(value) {
	"use strict";
	
	if (!isArray(value)) {
		throw new Error('Not an array');
	}
	
	return value.slice(0, value.length);
}

//var array = [1,2,3];
//var array2 = cloneArray(array);

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

//console.log(removeDuplicateStrings(['1', '2', '3', '4', '5', '1', '2', '3']));

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

//console.log(mergeArrays([1, 2, 3, 4, 5, 1, 2], [2, 4, 6, 4, 7, 3, 5]));

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

//console.log(removeElement(['1', '2', '3', '4', '5', '1', '2', '3'], 2));

function sortByTitle(value1, value2) {
	"use strict";
	
	return value1.title > value2.title ? 1 : -1;
}


var library = [
	{author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
	{author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
	{author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];
//console.log(library.sort(sortByTitle));

function isObject(value) {
	"use strict";
	return typeof value === 'object' ? true : false;
}

function getObjectLength(value) {
	"use strict";
	
	if (!isObject(value)) {
		throw new Error('Not an object');
	}
	
	return Object.keys(value).length;
}

var book = {author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264};
//console.log(getObjectLength(book));

function logObjectProperties(value) {
	"use strict";
	
	if (!isObject(value)) {
		throw new Error('Not an object');
	}
	
	for (var key in value) {
		console.log('key: ' + key + '; value: ' + value[key]);
	}
	
	return 0;
}

//logObjectProperties(book);

function isDate(value) {
	"use strict";
	return Object.prototype.toString.call(value) === '[object Date]' ? true : false;
}

function getDifferenceInDays(date1, date2) {
	"use strict";
	
	if (!isDate(date1) || !isDate(date2)) {
		throw new Error('Not a date');
	}
	
	return Math.floor((date1 - date2) / (1000 * 3600 * 24));
}

var now = new Date();
var past = new Date(2017, 3, 14);
//console.log(getDifferenceInDays(now, past));

function getCurrentDate() {
	"use strict";
	
	return new Date();
}

//now=getCurrentDate();

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
	
	return date.toLocaleString('en-US', options);
}

console.log(formatDate(new Date()));