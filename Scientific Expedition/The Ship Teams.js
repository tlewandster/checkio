'use strict';

function twoTeams(sailors) {
  const teams = Object.entries(sailors).reduce(
    (arr, item) => {
      if (item[1] > 40 || item[1] < 20) arr[0].push(item[0]);
      else arr[1].push(item[0]);
      return arr;
    },
    [[], []]
  );
  return [teams[0].sort(), teams[1].sort()];
}

var assert = require('assert');
if (!global.is_checking) {
  console.log('Example:');
  console.log(
    twoTeams({
      Smith: 34,
      Wesson: 22,
      Coleman: 45,
      Abrahams: 19
    })
  );

  // These "asserts" are used for self-checking and not for an auto-testing
  assert.deepEqual(
    twoTeams({
      Smith: 34,
      Wesson: 22,
      Coleman: 45,
      Abrahams: 19
    }),
    [['Abrahams', 'Coleman'], ['Smith', 'Wesson']]
  );

  assert.deepEqual(
    twoTeams({
      Fernandes: 18,
      Johnson: 22,
      Kale: 41,
      McCortney: 54
    }),
    [['Fernandes', 'Kale', 'McCortney'], ['Johnson']]
  );

  console.log("Coding complete? Click 'Check' to earn cool rewards!");
}
