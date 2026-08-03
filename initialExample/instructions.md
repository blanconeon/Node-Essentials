Review the code in app.js. To see the outputs of the code, type node app.js in the terminal and press Enter or Return.

Here are some things that are going on in the code:

The events module provides EventEmitter objects used to assign listener functions triggered on specified events.
The buffer module is used to handle binary data. In app.js, a Buffer object is being created and then converted to a string.
The fs module is used to interact with the user’s filesystem. In app.js, a statement is logged that verifies that a file was provided in a callback function.
The timer module provides the setImmediate() function, which runs immediately after the current poll phase is completed. Take note of when 'Welcome to Node.js' is logged to the terminal.