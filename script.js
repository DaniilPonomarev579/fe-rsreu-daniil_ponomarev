/**
 * Created by Danil on 11.04.2017.
 */
"use strict"

function calcTriangleArea(a, h) {
    return (a * h / 2);
}

function reverseArrayThreeTimes() {
    var array = [];
    for (var i = 0; i < 10; i++) {
        array[i] = i;
    }
    console.log('Initial array: ' + array);
    for (i = 0; i < array.length / 2; i++) {
        var t = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = t;
    }
    console.log('Reversed array 1: ' + array);
    while (i != 0) {
        i--;
        var t = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = t;
    }
    console.log('Reversed array 2: ' + array);
    do {
        var t = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = t;
        i++;
    } while (i < array.length / 2);
    console.log('Reversed array 3: ' + array);
}

function explainIncrementDifference() {
    var i1 = 0, i2 = 0;
    console.log('Initial values: ' + i1 + ', ' + i2);
    console.log('Intermediate values: ' + i1++ + ', ' + ++i2);
    console.log('Final values: ' + i1 + ', ' + i2);
}

function checkNumberSign(number) {
    if (number > 0) {
        return 'positive';
    }
    else if (number < 0) {
        return 'negative';
    }
    else if (number === 0) {
        return 'zero';
    }
    else return 'not a number';
}

function countFactorial(number) {
    if (number <= 1) {
        return number;
    }
    return number * countFactorial(number - 1);
}

var a = 5;
var h = 10;
console.log('Triangle side = ' + a + ';\nTriangle height = ' + h);
console.log('Triangle area = ' + calcTriangleArea(a, h));
reverseArrayThreeTimes();
explainIncrementDifference();
var number = 3;
console.log('The number is ' + checkNumberSign(number));
var name = prompt('What\'s your name?');
alert(name);
console.log('Factorial of ' + number + ' = ' + countFactorial(number));