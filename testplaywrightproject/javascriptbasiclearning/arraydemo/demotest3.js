/*
    Inbuilt Function - 02
    Array In buit functiosn in JavaScript

*/
// concatenating the Elements in to an existing array
let arr1=[10,8,6,12,4,14,2,7,1]
let arr2=arr1.concat(22,33,44)
console.log(arr2);

//This function joins the Elements in an Array
let arr3=[10,8,6,12,4,14,2,7,1]
let v1=arr3.join(",")
console.log(v1);


//It provides the position of the Element from left to Right
let s = [100,200,300,400, 500.600]
let v2=s.indexOf(300)
console.log(v2);

//It provides the position of the Element from right to Left
let s1 = [100,200,300,400, 500.600,300]
let v3=s1.lastIndexOf(300)
console.log(v3);
