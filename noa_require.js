const NoaParser = require('./out.js');
let value = NoaParser.parse('c = "z";', {
  captureLocations: true
});
console.log(JSON.stringify(value, null, 2));