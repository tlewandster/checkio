"use strict";

function longRepeat(line) {
    let lastChar = '';
    let len = 1;
    let max = 0;
    for (let i = 0; i < line.length; i++) {
        lastChar === (lastChar = line[i]) ? len++ : len = 1;
        if (len > max) max = len;
    }
    return max;
}

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(longRepeat('sdsffffse'), 4, "First")
    assert.equal(longRepeat('ddvvrwwwrggg'), 3, "Second")
    console.log('"Run" is good. How is "Check"?');
}