'use strict';

function betweenMarkers(text, begin, end) {
  let startMakerIndex = text.indexOf(begin);
  let endMarkerIndex = text.indexOf(end);
  if (startMakerIndex != -1 && endMarkerIndex != -1) {
    if (startMakerIndex < endMarkerIndex)
      return text.slice(startMakerIndex + begin.length, endMarkerIndex);
    else return '';
  } else if (startMakerIndex != -1)
    return text.slice(startMakerIndex + begin.length);
  else if (endMarkerIndex != -1) return text.slice(0, endMarkerIndex);
  else return text;
}

var assert = require('assert');

if (!global.is_checking) {
  console.log('Example:');
  console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple');

  assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple');
  assert.equal(
    betweenMarkers(
      '<head><title>My new site</title></head>',
      '<title>',
      '</title>'
    ),
    'My new site'
  );
  assert.equal(betweenMarkers('No[/b] hi', '[b]', '[/b]'), 'No');
  assert.equal(betweenMarkers('No [b]hi', '[b]', '[/b]'), 'hi');
  assert.equal(betweenMarkers('No hi', '[b]', '[/b]'), 'No hi');
  assert.equal(betweenMarkers('No <hi>', '>', '<'), '');
  console.log(
    "Coding complete? Click 'Check' to review your tests and earn cool rewards!"
  );
}
