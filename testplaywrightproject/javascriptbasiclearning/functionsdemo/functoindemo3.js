/*
    Write a function , It should return odd numbers 31 to 61
    TRaditional Function
*/

function getOddNumbers1(){
    let odd=[]
    for(let i=31;i<=61;i++){
        if(i % 2 ==1){
            odd.push(i)
        }
    }
    return odd;
}

let arr1=getOddNumbers1()
for(let x1 of arr1){
    console.log(x1);
    
}
console.log("----------------------------------------------");


/*
    Write a function , It should return odd numbers 31 to 61
    Ananymous Function
*/

let getOddNumbers2=function (){
    let odd=[]
    for(let i=31;i<=61;i++){
        if(i % 2 ==1){
            odd.push(i)
        }
    }
    return odd;
}

let arr2=getOddNumbers2()
for(let x1 of arr2){
    console.log(x1);
    
}
console.log("----------------------------------------------");
/*
    Write a function , It should return odd numbers 31 to 61
    Arrow  Function
*/

let getOddNumbers3= ()=>{
    let odd=[]
    for(let i=31;i<=61;i++){
        if(i % 2 ==1){
            odd.push(i)
        }
    }
    return odd;
}

let arr3=getOddNumbers2()
for(let x1 of arr3){
    console.log(x1);
    
}