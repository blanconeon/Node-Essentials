// Here we require in the 'events' module and save a reference to it in an events variable
let events = require('events');

// Ccreate an instance of the EventEmitter class
let myEmitter = new events.EventEmitter();

let listenerCallback = (data) => {
    console.log('Celebrate' + data);
}
//assign the listenerCallBack function as the listener callback for 'celebration' events
myEmitter.on("celebration", listenerCallback)

// emit a 'celebration' event 
myEmitter.emit('celebration', 'celebraciones')
// listenerCallback will be invoked with 'celebraciones'



 /* EventEmitter is a built-in class. You create an instance from it, which gives you two key methods: .on() and .emit().
.on() registers a function to run later — it says "when an event with this name happens, run this function." Nothing runs yet at this point, it's just on standby.
.emit() actually triggers that event right now. It has to use the exact same event name used in .on(), so the correct listener gets found. Any extra value passed into .emit() gets handed directly into the registered function as its input.
So the flow is: define a function → register it as a listener for a named event → later, emit that event → the function finally runs, using whatever data was passed along with the emit. */