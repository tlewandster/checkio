"use strict";

function numberRadix(str_number, radix) {
    const strTable = [...'0123456789ABCDEFGHIJKLMNOPQRSTUWVXYZ'];
    for (let item of str_number) {
        if (strTable.indexOf(item) >= radix) return -1;
    }
    return [...str_number]
        .reverse()
        .reduce((acc, val, index) => acc + strTable.indexOf(val) * Math.pow(radix, index), 0);
}

console.log(numberRadix("909", 9));

/* var assert = require('assert');

if (!global.is_checking) {
    assert.equal(numberRadix("AF", 16), 175, "Hex");
    assert.equal(numberRadix("101", 2), 5, "Bin");
    assert.equal(numberRadix("101", 5), 26, "5 base");
    assert.equal(numberRadix("Z", 36), 35, "Z base");
    assert.equal(numberRadix("AB", 10), -1, "B > A > 10");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
} */