"use strict";

function easyUnpack(elements) {
    // returns a tuple with 3 elements - first, third and second to the last

    // your code here
    return 0;
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Examples:')
    console.log(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]))
    
    assert.deepEqual(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]), [1, 3, 7])
    assert.deepEqual(easyUnpack([1, 1, 1, 1]), [1, 1, 1])
    assert.deepEqual(easyUnpack([6, 3, 7]), [6, 7, 3])
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
