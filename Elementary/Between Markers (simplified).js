"use strict";

function betweenMarkers(text, begin, end) {
    // returns substring between two given markers

    // your code here
    return 0;
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple')

    assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
    assert.equal(betweenMarkers('What is [apple]', '[', ']'), 'apple')
    assert.equal(betweenMarkers('What is ><', '>', '<'), '')
    assert.equal(betweenMarkers('>apple<', '>', '<'), 'apple')
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}