const api = require('./api.js');

// Not an error-first callback
let callbackFunc = (data) => {
  console.log(`Something went right. Data: ${data}\n`);
};

try {
  api.naiveErrorProneAsyncFunction('problematic input', callbackFunc);
} catch (err) {
  console.log(`Something went wrong. ${err}\n`);
}

/*
`naiveAsyncErr.js` is wrong because it uses `try...catch` to handle errors from an asynchronous function. Errors thrown inside the async part (like inside `setTimeout`) are not caught by this `try...catch`. As a result, async errors go uncaught, and the program may crash or show unhandled errors. Proper async error handling in Node.js should use error-first callbacks. */