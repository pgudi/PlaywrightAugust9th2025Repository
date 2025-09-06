/*
    Case 1: The return value of a function , we can use as parameter to another function

*/

function add1(x, y){
    return (x + y);
}

function sub1(x, y){
    let result= (x - y);
    return result
}

function multiplication(x, y){
    let result=(x * y)
    console.log("Multiplication Result :"+result);
    
}

// First Approach, how to use return value
let a=add1(2,8)
let b=sub1(10,5)
multiplication(a,b)
// Second Approach, how to use return value
multiplication(add1(4,11), sub1(25,19))