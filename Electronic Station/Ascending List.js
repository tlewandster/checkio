'use strict';

function isAscending(items) {
  if (items.length == 0 || items.length == 1) return true;
  else {
    let result = true;
    items.reduce((p, c) => {
      result = result && c - p > 0 ? true : false;
      return c;
    });
    return result;
  }
}

var assert = require('assert');
if (!global.is_checking) {
  console.log('Example:');
  console.log(isAscending([-5, 10, 99, 123456]));

  // These "asserts" are used for self-checking and not for an auto-testing
  assert.equal(isAscending([-5, 10, 99, 123456]), true);
  assert.equal(isAscending([99]), true);
  assert.equal(isAscending([4, 5, 6, 7, 3, 7, 9]), false);
  assert.equal(isAscending([]), true);
  assert.equal(isAscending([1, 1, 1, 1]), false);
  console.log("Coding complete? Click 'Check' to earn cool rewards!");
}
