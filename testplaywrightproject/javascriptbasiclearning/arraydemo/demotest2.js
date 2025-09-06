/*
    Inbuilt Function - 01
    Array In buit functiosn in JavaScript

*/
let arr=[2,4,6,8,10,12,14]

// Verify whether an array contains Element 10
let result1=arr.includes(10)
console.log(result1);

// Add new Elements in to an existing array at end
let arr1=[2,4,6,8,10,12,14]
arr1.push(16)
console.log(arr1);

//REmove Elements from the Array from end
let arr2=[2,4,6,8,10,12,14]
arr2.pop()
console.log(arr2);

//UnShift Elements, It adds elements at the beginning
let arr3=[2,4,6,8,10,12,14]
arr3.unshift(120)
console.log(arr3);

//shift elements at the beginning
let arr4=[2,4,6,8,10,12,14]
arr4.shift()
console.log(arr4);