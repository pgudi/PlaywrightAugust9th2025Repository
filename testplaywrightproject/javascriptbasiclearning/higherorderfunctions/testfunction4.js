/*
    Explore Reduce function
    reduce function provides consolidated result
*/

const arr = [2,7,9,4,8,5]

const maxelement = function(arr){
    let max=0
    for(let i=0;i<arr.length;i++){
        if(arr[i] > max){
            max= arr[i]
        }
    }
    return max
}

console.log(maxelement(arr));
console.log("----------------------------------");
const maxelementnew = arr.reduce(function(acc,curr){
    if(curr > acc){
        acc=curr
    }
    return acc
},0)

console.log(maxelementnew);
