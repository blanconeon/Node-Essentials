const api = require('./api.js');

// An error-first callback
let errorFirstCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong. ${err}\n`);
  } else {
    console.log(`Something went right. Data: ${data}\n`);
  }
};
// correctly uses error-first call back
api.errorProneAsyncApi('problematic input', errorFirstCallback);

/* `app.js` is correct because it uses an error-first callback. The callback receives any error as its first argument and handles it inside the function. This matches the standard Node.js pattern for handling errors in asynchronous code, making error handling reliable and predictable.*/