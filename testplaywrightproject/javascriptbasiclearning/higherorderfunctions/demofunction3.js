const arr = [2,4,6,8,10,12]

const readfirstHalf = function(arr){
    let result =[]
    for(let i=0;i<arr.length/2;i++){
        result.push(arr[i]);
    }
    return result
}

console.log("-----------------------------------");

const readSecondHalf = function(arr){
    let result =[]
    for(let i=arr.length/2;i<arr.length;i++){
        result.push(arr[i]);
    }
    return result
}


console.log("-----------------------------------");

const readReverse = function(arr){
    let result =[]
    for(let i=arr.length-1;i>=0;i--){
        result.push(arr[i]);
        
    }
    return result
}


Array.prototype.readElements = function (logic){
    return logic(this)
}

const output1 = arr.readElements(readfirstHalf)
console.log(output1);

const output2 = arr.readElements(readSecondHalf)
console.log(output2);

const output3 = arr.readElements(readReverse)
console.log(output3);