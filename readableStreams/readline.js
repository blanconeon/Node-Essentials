const readline = require('readline'); 
// imports Node's built-in 'readline' module — used for reading input line-by-line (often from files or the terminal)

const fs = require('fs'); 
// imports the 'fs' module — needed here to create a readable stream from a file

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
  // fs.createReadStream() creates a READABLE STREAM — instead of loading the
  // entire file into memory at once, it reads the file in small chunks over time
  // this stream is passed as the 'input' for readline to process
});
// readline.createInterface() wraps that readable stream and adds the ability
// to process the incoming data LINE BY LINE (splitting on newline characters),
// rather than dealing with raw chunks of file data yourself

const printData = (data) => {
  console.log(`Item: ${data}`);
};
// this is your callback — defines what to do with EACH line of text once it's read

myInterface.on('line', printData);
// myInterface is an EventEmitter — it emits events as it works through the stream
// .on('line', printData) sets up a LISTENER: "every time a 'line' event fires,
// call printData with that line's data"
//
// 'line' is the NAME OF THE EVENT being listened for — readline automatically
// emits a 'line' event each time it finishes reading one line of the file
// (i.e., every time it hits a newline character in shoppingList.txt)
//
// the argument printData receives (its `data` parameter) is automatically
// passed in by readline — it's the STRING CONTENT of that single line




/*
Why 'line' Must Be 'line' — Under the Hood
readline.createInterface() returns an object built on Node's EventEmitter class, which gives it .on() and .emit() methods for handling custom events. Internally, readline's own source code — written by the Node.js team — contains logic that calls this.emit('line', lineText) every time it finishes reading one full line from the input stream. That emit('line', ...) call is hardcoded inside readline's implementation; it's not something you write or see.
When you write myInterface.on('line', printData), you're telling that object: "when you emit an event named exactly 'line', run printData." This only works because the string you're listening for ('line') exactly matches the string readline internally emits. If you swapped it for anything else ('banana', 'lines', etc.), it would be valid JavaScript syntax — no error — but your callback would simply never run, because nothing inside readline ever emits that alternate name.
Key distinction for notes: 'line' is not a reserved JavaScript keyword — it's just a plain string, and you're free to use the word "line" anywhere else in your own code for anything. It only must be 'line' in this specific context because it's the exact event name readline was built to emit — a convention/contract defined by that module, documented in Node's official docs, not a rule enforced by the JavaScript language itself. In short: the requirement is real and non-negotiable for readline to work — but it comes from matching an internal emit() call in that specific module, not from JS treating 'line' as special.
*/