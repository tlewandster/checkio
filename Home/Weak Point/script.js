"use strict";

function weakPoint(matrix) {
  const sumsOfRows = [];
  const sumsOfColumns = [];

  // create a array of rows sums
  matrix.forEach(e => {
    sumsOfRows.push(e.reduce((p, c) => p + c));
  });

  // create a array of columns sums
  matrix.forEach(e => {
    for (let i = 0; i < e.length; i++) {
      sumsOfColumns[i] = (sumsOfColumns[i] || 0) + e[i];
    }
  });

  // find the index of minimum element in rows
  const minRowsIndex = sumsOfRows.indexOf(Math.min(...sumsOfRows));

  // find the index of minimum element in columns
  const minColumnsIndex = sumsOfColumns.indexOf(Math.min(...sumsOfColumns));

  // return result
  return [minRowsIndex, minColumnsIndex]
}


var assert = require('assert');

if (!global.is_checking) {
  assert.deepEqual(weakPoint([
    [7, 2, 7, 2, 8],
    [2, 9, 4, 1, 7],
    [3, 8, 6, 2, 4],
    [2, 5, 2, 9, 1],
    [6, 6, 5, 4, 5]
  ]), [3, 3], "Example");
  assert.deepEqual(weakPoint([
    [7, 2, 4, 2, 8],
    [2, 8, 1, 1, 7],
    [3, 8, 6, 2, 4],
    [2, 5, 2, 9, 1],
    [6, 6, 5, 4, 5]
  ]), [1, 2], "Two weak point");

  assert.deepEqual(weakPoint([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
  ]), [0, 0], "Top left");
  console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}