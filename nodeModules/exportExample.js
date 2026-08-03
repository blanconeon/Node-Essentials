/* shape-area.js */
const { PI } = Math;

// Define and export circleArea() and squareArea() below
const circleArea = function (radiusLength) {
return PI * radiusLength * radiusLength
};
// separate export from function
module.exports.circleArea = circleArea;

// function declaration and export in one.
module.exports.squareArea = function (sideLength) {
  return sideLength * sideLength

}