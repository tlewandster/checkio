'use strict';

function isAscending(items) {
  let result = true;
  items.reduce((prev, curr) => {
    result = prev - curr < 0 ? true : false || result;
    return curr;
  });
  return result;
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
