"use strict";

function mostFrequent(data) {

    const counted = data.reduce((p, c) => {
        p[c] ? p[c] += 1 : p[c] = 1;
        return p;
    }, {});
    return Object.keys(counted).find(key => counted[key] === Math.max(...Object.values(counted)));
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(mostFrequent([
        'a', 'b', 'c', 
        'a', 'b',
        'a'
    ]))
    
    assert.equal(mostFrequent([
        'a', 'b', 'c', 
        'a', 'b',
        'a'
    ]), 'a')
    assert.equal(mostFrequent(['a', 'a', 'bi', 'bi', 'bi']), 'bi')
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}
