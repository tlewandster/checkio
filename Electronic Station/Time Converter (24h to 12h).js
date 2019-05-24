'use strict';

function timeConverter(dayTime) {
  let [hours, minutes] = dayTime.split(':');
  let am_pm = hours >= 0 && hours < 12 ? 'a.m.' : 'p.m.';
  hours = (hours == 12) | (hours == 0) ? 12 : hours % 12;
  return `${hours}:${minutes} ${am_pm}`;
}

var assert = require('assert');
if (!global.is_checking) {
  console.log('Example:');
  console.log(timeConverter('12:30'));

  // These "asserts" are used for self-checking and not for an auto-testing
  assert.equal(timeConverter('12:30'), '12:30 p.m.')
  assert.equal(timeConverter('09:00'), '9:00 a.m.')
  assert.equal(timeConverter('23:15'), '11:15 p.m.')
  console.log("Coding complete? Click 'Check' to earn cool rewards!");
}
