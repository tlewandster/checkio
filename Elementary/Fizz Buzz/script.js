"use strict";

function fizzBuzz(data) {
    if (!(data % 3) || !(data % 5)) {
        if (!(data % 3) && !(data % 5)) return "Fizz Buzz";
        else if (!(data % 3)) return "Fizz";
        else return "Buzz";
    } else return data;
}
// console.log(fizzBuzz(52));

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(fizzBuzz(15), "Fizz Buzz", "15 is divisible by 3 and 5");
    assert.equal(fizzBuzz(6), "Fizz", "6 is divisible by 3");
    assert.equal(fizzBuzz(5), "Buzz", "5 is divisible by 5");
    assert.equal(fizzBuzz(7), "7", "7 is not divisible by 3 or 5");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}