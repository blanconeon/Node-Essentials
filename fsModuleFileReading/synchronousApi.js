// synchronous 

const { readFileSync } = require('fs');

let data;
try {
  data = readFileSync('./file.txt', 'utf-8')
  console.log(`Provided file contained: ${data}`);
} catch (err) {
  console.log(`Something went wrong: ${err}`);
}

//Synchronous file functions block the entire program until the operation finishes. This is sometimes useful for quick scripts, setup tasks, or when you must guarantee that a file is read before anything else happens.

