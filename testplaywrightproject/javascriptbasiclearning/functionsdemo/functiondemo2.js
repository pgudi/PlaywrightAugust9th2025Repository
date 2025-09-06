/*
    find the sum of all elements from the given integer array
    Step 1: Traditional Function
*/
function findSumOfElements1(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    console.log("sum of All Elements :"+sum);
    
}
let a=[10,20,30,40,50]
findSumOfElements1(a)

/*
    find the sum of all elements from the given integer array
    Step 1: Ananymous Function
*/
let findSumOfElements2=function (arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    console.log("sum of All Elements :"+sum);
    
}
let b=[10,20,30,40,50,60]
findSumOfElements2(b)

/*
    find the sum of all elements from the given integer array
    Step 1: Ananymous Function
*/
let findSumOfElements3= (arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    console.log("sum of All Elements :"+sum);
    
}
let c=[10,20,30,40,50,60,70]
findSumOfElements3(c)