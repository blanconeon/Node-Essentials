// synchronous 

const { readFileSync } = require('fs');

let data;
try {
  data = readFileSync('./file.txt', 'utf-8')
  console.log(`Provided file contained: ${data}`);
} catch (err) {
  console.log(`Something went wrong: ${err}`);
}
