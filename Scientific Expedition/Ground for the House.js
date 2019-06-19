'use strict';

function house(plan) {
  let area = plan.split('\n');

  area = trimmArray(area);
  if (area.length == 0) return 0;
  area = transpositionArray(area);
  area = trimmArray(area);

  return area.length * area[0].length;

  function trimmArray(array) {
    const trueMap = array.map(item => item.includes('#'));
    let firstRowWithHash = trueMap.indexOf(true);
    let lastRowWithHash = trueMap.lastIndexOf(true);
    return array.slice(firstRowWithHash, lastRowWithHash + 1);
  }

  function transpositionArray(array) {
    const transArray = [];
    for (let i = 0; i < array[0].length; i++) transArray.push([]);
    array.forEach(item => {
      for (let i = 0; i < item.length; i++) {
        transArray[i].push(item[i]);
      }
    });
    return transArray;
  }
}

var assert = require('assert');
if (!global.is_checking) {
  console.log('Example:');
  console.log(
    house(`
0000000
##00##0
######0
##00##0
#0000#0
`)
  );

  // These "asserts" are used for self-checking and not for an auto-testing
  assert.equal(
    house(`
0000000
##00##0
######0
##00##0
#0000#0
`),
    24
  );

  assert.equal(
    house(`0000000000
#000##000#
##########
##000000##
0000000000
`),
    30
  );

  assert.equal(
    house(`0000
0000
#000
`),
    1
  );

  assert.equal(
    house(`0000
0000
`),
    0
  );

  assert.equal(
    house(`0##0
0000
#00#
`),
    12
  );

  console.log("Coding complete? Click 'Check' to earn cool rewards!");
}
