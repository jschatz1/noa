const NoaParser = require('./out.js');
let value = NoaParser.parse('7 + 2;', {
  captureLocations: true
});
console.log(JSON.stringify(value, null, 2));