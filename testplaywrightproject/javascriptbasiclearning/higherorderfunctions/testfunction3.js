/*
    Explore Reduce function
    reduce function provides consolidated result
*/

const arr = [2,7,9,4,8,5]

const sumresult=function(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum
}

console.log(sumresult(arr));

console.log("----------------------------------");
const sumresultnew = arr.reduce(function(acc,curr){
    return acc=acc+curr
},0)

console.log(sumresultnew);

