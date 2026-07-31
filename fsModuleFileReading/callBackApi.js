// Callback API: methods that take error-first callback functions to handle file data asynchronously

const { readFile } = require('fs');

let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};

readFile('./file.txt', 'utf-8', readDataCallback);

 /* 
 Let’s walk through the example above:

We destructure the readFile method from the fs module import (it is NOT globally available, so must be imported).
We define an error-first callback function that expects an error to be passed as the first 
argument
Preview: Docs Loading link description
 and data as the second. If an error is present, the function will print Something went wrong: ${err} — otherwise, it will print Provided file contained: ${data}.
We invoke the .readFile() method with three arguments:
The first argument is a 
string
Preview: Docs Loading link description
 that contains a path to the file file.txt.
The second argument is a string specifying the file’s character encoding (usually ‘utf-8’ for text files). Note that while this 
parameter
Preview: Docs Loading link description
 is optional, the default value is null, which yields the data as a Buffer. To get the data as text, we must specify 'utf-8'.
The third argument is the callback function to be invoked when the asynchronous task of reading from the file system is complete. Node will pass the contents of file.txt into the provided callback as its second argument.
 
 
 
 */