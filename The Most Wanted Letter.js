"use strict";

function mostWanted(data) {
  const letterCount = {};
  [...data.toLowerCase()].forEach(letter => {
    console.log(letter);
    letterCount[letter] ? letterCount[letter]++ : letterCount[letter] = 1;
  });
  return letterCount;
}

console.table(mostWanted("How do you do?"));


/* var assert = require('assert');

if (!global.is_checking) {
    assert.equal(mostWanted("Hello World!"), "l", "1st example");
    assert.equal(mostWanted("How do you do?"), "o", "2nd example");
    assert.equal(mostWanted("One"), "e", "3rd example");
    assert.equal(mostWanted("Oops!"), "o", "4th example");
    assert.equal(mostWanted("AAaooo!!!!"), "a", "Letters");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
} */