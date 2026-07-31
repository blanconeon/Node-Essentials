 // Promises API: methods that return a Promise to handle file data asynchronously, via fs.promises, which can be used with async/await or .then()/.catch() syntax

 //Promises do not need callback functions because they use `.then()` and `.catch()` methods to handle results and errors. This separates the asynchronous operation from the code that handles its outcome, making code easier to read and manage than traditional callbacks.

 // shortcut for importing methods from the Promise API
const { readFile } = require('fs/promises');

readFile('./file.txt', 'utf-8')
  .then(data => {
    console.log(`Provided file contained: ${data}`);
  })
  .catch(err => {
    console.log(`Something went wrong: ${err}`);
  })







  // below another example from exercise

// exercise required finding the vaue of secret word reavarious text files
let secretWord = "cheeseburgerpizzabagels";


const fs = require('fs/promises');

const printWord = async () => {
  try{
    const data = await fs.readFile('./finalFile.txt', 'utf-8');
       console.log(`Provided file contained: ${data}`);
  } catch (err) {
    console.log(`Something went wrong: ${err}`);
  }
};

printWord();