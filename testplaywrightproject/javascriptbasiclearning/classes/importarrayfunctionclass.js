/*
    Import A class Which has Basic or Generic Array Functions
*/

const {SingleDimensionalArray} = require('./exportarrayfunctionclass')

let o = new SingleDimensionalArray()

let a = [10,20,30,40,50,60]
o.readFirstHalfOfElements(a)
console.log("-------------");
o.readSecondHalfOfElements(a)
console.log("-------------");
o.readFirstHalfOfElementsInReverse(a)
console.log("-------------");
o.readSecondHalfOfElementsInReverse(a)
