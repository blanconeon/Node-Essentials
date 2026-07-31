const readline = require('readline');
// imports Node's built-in 'readline' module — used to read input line-by-line

const fs = require('fs');
// imports the 'fs' module — needed for both reading and writing files/streams

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
  // creates a READABLE STREAM from shoppingList.txt — reads the file in small
  // chunks instead of loading it all into memory at once
});
// wraps that readable stream so we can process its content LINE BY LINE,
// rather than dealing with raw chunks manually

const fileStream = fs.createWriteStream('shoppingResults.txt');
/*
fs.createWriteStream('shoppingResults.txt') will do:
If shoppingResults.txt does not exist, it will be created.
If it does exist, it will be opened and ready to be written on (and by default, its contents will be replaced).
So, this line sets up the file for writing, creating it if needed.
 */
// this creates a WRITABLE STREAM — instead of building a giant string and
// writing it all at once, this lets you write to the file incrementally,
// piece by piece, as data becomes available

const transformData = (line) => {
fileStream.write(`They were out of ${line}\n`);
}
// this is the callback that runs for EACH line read from shoppingList.txt
// it takes that line's text (`line`) and writes a NEW, transformed line
// into shoppingResults.txt via the writable stream (fileStream)
// the \n ensures each entry lands on its own new line in the output file

myInterface.on('line', transformData);
// myInterface is an EventEmitter — readline automatically emits a 'line' event
// every time it finishes reading one full line from shoppingList.txt
//
// this listener says: "every time a 'line' event fires, run transformData,
// passing in that line's text as the `line` parameter"
//
// net effect: for every item in shoppingList.txt, a corresponding
// "They were out of <item>" line gets written into shoppingResults.txt