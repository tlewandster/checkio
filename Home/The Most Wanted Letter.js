"use strict";

function mostWanted(data) {

  const countedLetters = Object.entries(
    [...data]
    .map(letter => letter.toLowerCase())
    .sort()
    .filter(letter => letter >= 'a' && letter <= 'z')
    .reduce((letters, letter) => {
      letters[letter] = (letters[letter] + 1) || 1;
      return letters;
    }, {})
  );

  const result = countedLetters.reduce((prevCount, currentCount) => {
    return currentCount[1] > prevCount[1] ? currentCount : prevCount;
  }, [0, 0]);

  return result[0];
}

var assert = require('assert');

if (!global.is_checking) {
  assert.equal(mostWanted("Hello World!"), "l", "1st example");
  assert.equal(mostWanted("How do you do?"), "o", "2nd example");
  assert.equal(mostWanted("One"), "e", "3rd example");
  assert.equal(mostWanted("Oops!"), "o", "4th example");
  assert.equal(mostWanted("AAaooo!!!!"), "a", "Letters");
  console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}