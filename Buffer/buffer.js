// import the Buffer module
const { Buffer } = require('buffer');

// allocate buffer of size 15 filled with 'b'
const bufferAlloc = Buffer.alloc(15, 'b')

// create buffer1 with 'Node' and buffer2 with '.js'
const buffer1 = Buffer.from('Node');

const buffer2 =  Buffer.from('.js');

  
// combine buffer1 and buffer2

const bufferArray = [buffer1, buffer2];


// translate buffer to string
const bufferConcat = Buffer.concat(bufferArray);

const bufferString = bufferConcat.toString()

// uncomment the appropriate `console.log()` to ouput to console
// console.log(bufferAlloc);
// console.log('Buffer 1:', buffer1, 'Buffer 2:', buffer2)
 //console.log(bufferConcat);
// console.log(bufferString);




/*
A Buffer in Node.js is a fixed-size chunk of raw bytes (each byte a number from 0–255) stored directly in memory — this is what "binary data" means in this context. You create one with Buffer.alloc(size) (empty, zero-filled by default, or optionally filled with a value) or Buffer.from(data) (converts existing data, like a string, into bytes). Technically, a Buffer is a JavaScript object (specifically a subtype of Uint8Array), but Node gives it special console formatting — when you console.log() a whole buffer, it's always displayed as hex pairs wrapped in <Buffer ...>, purely for human readability. That hex display is not the buffer's "true" value — it's just one way of representing the underlying numbers. If you access an individual byte (buffer[0]), you get back a plain decimal number instead.
The key takeaway is that a byte's value (decimal, hex, binary) is always the same underlying number — decimal, hex, and binary are just different notations for writing it, not different types of data. buffer.toString(encoding) lets you convert the buffer into an actual string, in whatever encoding you choose ('utf8' for readable text, 'hex' for hex characters, 'base64', etc.) — this creates a brand-new string value, separate from the original buffer, which remains unchanged and still binary. So overall: Buffer = bytes in memory → bytes are just numbers → hex/decimal/binary are just different ways to write those numbers → .toString() converts those bytes into a human-readable string when needed.





*/