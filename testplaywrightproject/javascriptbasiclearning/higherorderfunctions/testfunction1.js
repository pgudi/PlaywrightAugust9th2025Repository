/*
    Explore map function
    map function provides the transformation of an array
*/
const arr = [2,7,9,4,8,5]

const double = function(arr){
    return (2 * arr)
}


const resultdouble=arr.map(double)
console.log(resultdouble);

console.log("-----------------------------------------");
const triple = function (arr){
    return (3 * arr)
}

const resulttriple=arr.map(triple)
console.log(resulttriple);
console.log("-----------------------------------------");
const binary = function(arr){
    return (arr.toString(2))
}

const resultbinary = arr.map(binary)
console.log(resultbinary);
console.log("-----------------------------------------");

let resultmultiply10=arr.map(function(x){
    return (x * 10)
})

console.log(resultmultiply10);

console.log("-----------------------------------------");

let resultmultiply5=arr.map((x) =>{
    return (x * 5)
})

console.log(resultmultiply5);
