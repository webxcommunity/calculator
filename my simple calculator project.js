// Calculator.js
function multiply (x , y){
    return (x * y);
}

function add(x,y) {
   return (x + y);
}

function subtract(x,y){
    return (x-y);
}

function division(x,y){
    return (x/y);
}

module.exports = {
    multiply,
    add,
    subtract,
    division
}

//app.js
const path = require('path');
const colors = require('colors');
const calculator = require('./my_modules/calculator.js');

let x = 30;
let y = 2;

console.log(path.basename(__filename));
console.log(colors.bgRed(__filename));
console.log(colors.bgBlue(calculator.multiply(x,y)));
console.log(colors.bgMagenta(calculator.add(x,y)));
console.log(colors.bgRed(calculator.subtract(x,y)));
console.log(colors.bgGreen(calculator.division(x,y)));

//package.json
{
  "name": "timothy-calculator",
  "version": "1.0.0",
  "main": "app.js",
  "dependencies": {
    "colors": "^1.4.0"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Okuwobi Timothy",
  "license": "ISC",
  "description": "Calculator Assignment"
}

