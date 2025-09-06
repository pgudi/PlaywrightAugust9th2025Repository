/*
    Functions which do not return value:
    traditional Function
*/

function findFactorial(number){
    let fact=1
    for(let i=number;i>=1;i--){
        fact=fact * i
    }
    console.log("The Factorial of "+number+" is "+fact);  
}
findFactorial(5)

/*
    Functions which do not return value:
    anonymous Function
*/
let findFactorial2=function (number){
    let fact=1
    for(let i=number;i>=1;i--){
        fact=fact * i
    }
    console.log("The Factorial of "+number+" is "+fact);  
}
findFactorial2(6)

/*
    Functions which do not return value:
    Array Function
*/

let findFactorial3=(number)=>{
    let fact=1
    for(let i=number;i>=1;i--){
        fact=fact * i
    }
    console.log("The Factorial of "+number+" is "+fact);  
}
findFactorial3(7)