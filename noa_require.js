const NoaParser = require('./out.js');
let value = NoaParser.parse('7+2');
console.log(JSON.stringify(value, null, 2));