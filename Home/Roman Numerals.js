'use strict';

function romanNumerals(number) {
  let romanString = '';
  for (let i = 0; i < Math.floor(number / 1000); i++) {
    romanString += 'M';
    number -= 1000;
  }
  return [romanString, number];
}

console.log(romanNumerals(6), 'VI', 'First');
console.log(romanNumerals(76), 'LXXVI', 'Second');
console.log(romanNumerals(499), 'CDXCIX', 'Third');
console.log(romanNumerals(3888), 'MMMDCCCLXXXVIII', 'Forth');

// var assert = require('assert');

// if (!global.is_checking) {
//     assert.equal(romanNumerals(6), 'VI', "First");
//     assert.equal(romanNumerals(76), 'LXXVI', "Second");
//     assert.equal(romanNumerals(499), 'CDXCIX', "Third");
//     assert.equal(romanNumerals(3888), 'MMMDCCCLXXXVIII', "Forth");
//     console.log("Done! Go Check!");
// }
