/*
   Case 2: The return value of a function, can be used within the body another function
*/

function add1(x, y){
    return (x + y);
}

function sub1(x, y){
    let result= (x - y);
    return result
}

function multiplication(){
    let a=add1(20,5)
    let b=sub1(45,40)
    let result=(a * b)
    console.log("Multiplication Result:"+result)
}

multiplication()