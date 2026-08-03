/* app.js */ 

const radius = 5;
const sideLength = 10;

// import the entire shape-area.js module or destructure the individual functions here
const areaFunctions = require('./shape-area.js'); // here you import another file. 


// use the imported circleArea and squareArea methods here

const areaOfCircle = areaFunctions.circleArea(radius);

const areaOfSquare = areaFunctions.squareArea(sideLength);

console.log(`the values are ${areaOfCircle} and ${areaOfSquare}`);


// Destructuring the function would look like in import and usage would be: 

const {circleArea} = require('./shape-area.js');
//using the destructured function
const areaOfCircle = circleArea(radious);