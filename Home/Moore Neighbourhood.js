"use strict";

function countNeighbours(data, row, col) {
    let count = 0;
    for (let r = row - 1; r <= row + 1; r++) {
        if (data[r]) {
            let colMin = col - 1;
            let colMax = col + 2;
            if (colMin < 0) colMin = 0;
            if (colMax > data[r].length) colMax = data[r].length;
            let newData = data[r].slice(colMin, colMax);
            newData.forEach(element => {
                if (element) count++;
            })
        }
    }
    if (data[row][col]) count--;
    return count;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(countNeighbours([
        [1, 0, 0, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0]
    ], 1, 2), 3, "1st example");

    assert.equal(countNeighbours([
        [1, 0, 0, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0]
    ], 0, 0), 1, "2nd example");

    assert.equal(countNeighbours([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
    ], 0, 2), 3, "Dense corner");

    assert.equal(countNeighbours([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
    ], 1, 1), 0, "Single");

    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}