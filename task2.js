/**
 * Created by Danil on 16.04.2017.
 */

function isString(value) {
	"use strict";
	
	return typeof value === 'string';
}

// Write a JavaScript function that checks whether a passed string is
// palindrome or not

function isPalindrome(string) {
	"use strict";
	
	if (isString(string)) {
		
	} else {
		throw new Error('not a string');
	}
}

// Write a JavaScript function that generates all combinations of a string
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

// Write a JavaScript function that returns a passed string with letters in
// alphabetical order using "Bubble Sort algorithm"

// Write a JavaScript function that accepts a string as a parameter and find
// the longest word within the string

// Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"