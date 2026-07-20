// import the testNumber function from game.js
let { testNumber } = require('./game.js');

// print the initial prompt to the terminal (runs once, at the start)
process.stdout.write("I'm thinking of a number from 1 through 10. What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");

// define playGame — not run yet, just stored, ready to be registered as a listener
let playGame = (userInput) => {
  // userInput arrives as a Buffer, so convert to string and remove extra whitespace
  let input = userInput.toString().trim();
  // pass the guess to testNumber, which checks it and gives feedback
  testNumber(input);
};

// register playGame as the listener for stdin's 'data' event
// Node automatically emits 'data' (no .emit() needed here) every time
// the user types something in the terminal and hits Enter
// this keeps running in a loop, not just once, so the game can accept repeated guesses
process.stdin.on('data', playGame);