'use strict';

function romanNumerals(number) {
  let romanString = '';
  const changeArr = [
    [1000, 'M'],
    [500, 'D'],
    [100, 'C'],
    [50, 'L'],
    [10, 'X'],
    [5, 'V'],
    [1, 'I']
  ];
  const replaceArr = [
    ['DCCCC', 'CM'],
    ['CCCC', 'CD'],
    ['LXXXX', 'XC'],
    ['XXXX', 'XL'],
    ['VIIII', 'IX'],
    ['IIII', 'IV']
  ];
  const changeToRoman = (value, string) => {
    let sum = 0;
    for (let i = 0; i < Math.floor(number / value); i++) {
      romanString += string;
      sum += value;
    }
    number = number - sum;
  };

  for (const pair of changeArr) {
    changeToRoman(...pair);
  }

  for (const pair of replaceArr) {
    romanString = romanString.replace(...pair);
  }

  return romanString;
}

var assert = require('assert');

if (!global.is_checking) {
  assert.equal(romanNumerals(6), 'VI', 'First');
  assert.equal(romanNumerals(76), 'LXXVI', 'Second');
  assert.equal(romanNumerals(499), 'CDXCIX', 'Third');
  assert.equal(romanNumerals(3888), 'MMMDCCCLXXXVIII', 'Forth');
  console.log('Done! Go Check!');
}
