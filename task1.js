/**
 * Created by Danil on 13.04.2017.
 */

function isNumber(value) {
	"use strict";
	
	return typeof value === 'number' && isFinite(value);
}

// Write a JavaScript function that accept two integers and display the largest

function max(x, y) {
	"use strict";
	
	if (isNumber(x) && isNumber(y)) {
		return x > y ? x : y;
	}
	else {
		throw new Error('NaN');
	}
}

console.log(max(5, 10));

// Write a JavaScript for loop that will iterate from 0 to 9. For each
// iteration, it will check if the current number is odd or even, and display a
// message to the console

function isEven(x) {
	"use strict";
	
	if (isNumber(x)) {
		return x % 2 === 0;
	} else {
		throw new Error('NaN');
	}
}

function iterateWithCheck() {
	"use strict";
	
	for (var i = 0; i <= 9; i++) {
		console.log(i + ' is ' + (isEven(i) ? 'even' : 'odd'));
	}
}

iterateWithCheck();

// Write a JavaScript function to check whether a string is blank or not

function is_Blank(string) {
	"use strict";
	
	if (typeof string === 'string') {
		for (var i = 0; i < string.length; i++) {
			if (string[i] !== ' ') {
				return false;
			}
		}
	} else {
		throw new Error('Not a string');
	}
	return true;
}

// Test Data :
console.log(is_Blank('')); // true
console.log(is_Blank('     ')); // true
console.log(is_Blank('  abc  ')); // false