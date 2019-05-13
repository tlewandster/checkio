"use strict";

function correctSentence(text) {
    const sentence = [...text];
    sentence[0] = sentence[0].toUpperCase();
    while (!sentence[sentence.length - 1].match(/[a-z]/)) sentence.pop();
    sentence.push('.');
    return sentence.join('');
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(correctSentence("greetings, friends"))

    // These "asserts" using for self-checking and not for auto-testing
    assert.equal(correctSentence("greetings, friends"), "Greetings, friends.")
    assert.equal(correctSentence("Greetings, friends"), "Greetings, friends.")
    assert.equal(correctSentence("Greetings, friends."), "Greetings, friends.")
    assert.equal(correctSentence("hi"), "Hi.")
    assert.equal(correctSentence("welcome to New York"), "Welcome to New York.")

    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}