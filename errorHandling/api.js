module.exports = {
  errorProneAsyncApi: (input, callback) => {
    console.log(`Running errorProneAsyncApi with input: ${input}...\n`)
    setTimeout(() => {
      let myErr;
      if (input === 'problematic input') {
        myErr = new Error('whoops')
        callback(myErr)
      } else {
        let responseData = `Received valid input "${input}"`
        callback(myErr, responseData)
      }
    }, 0)
  },

  naiveErrorProneAsyncFunction: (input, callback) => {
    console.log(`Running naiveErrorProneAsyncFunction with input: ${input}...\n`)
    setTimeout(() => {
      if (input === 'problematic input') {
        throw new Error('whoops')
      } else {
        let responseData = `Received valid input "${input}"`
        callback(responseData)
      }
    }, 0)
  }

}

/* `naiveErrorProneAsyncFunction` throws errors inside an async callback but does not use an error-first callback. This makes it hard to handle errors, because they cannot be caught by `try...catch` outside the function.

`errorProneAsyncApi` uses the error-first callback pattern. It passes any error as the first argument to the callback, making it easy to handle errors in async code. This is the standard Node.js way.

The first is not recommended; the second is correct for Node.js async error handling. */

