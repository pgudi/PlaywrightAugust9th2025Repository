/*
    Explore filter function
    filter function filters the given array of elements
*/
const arr = [2,7,9,4,8,5]

//display Even number Elements
const evenNumbers= arr.filter((x) =>{
    if(x % 2==0){
        return x
    }
})

console.log(evenNumbers);
//display odd number Elements
const oddNumbers = arr.filter((x)=>{
    if(x % 2==1){
        return x
    }
})

console.log(oddNumbers);
//display numbers which are less than 5
const lessThan5=arr.filter((x) =>{
    if(x <5){
        return x
    }
})

console.log(lessThan5);

