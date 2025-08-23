/*
    String in built Function Part -05
*/

//repalce function
let s1="It is a new palace"
let s2=s1.replace("is","was")
console.log(s2);

// split function, It returns an array, IT takes space as delimiter
let s3="Apple,Mango,Banana,Orange,Grapes"
let s4=s3.split(",")
console.log(s4);

// length function
let s5="Welcome"
let v1=s5.length
console.log(v1);

// trim function , it remove space on both sides
let s6="   Program   "
let v2=s6.length
console.log("Before trim, length of String :"+v2);
let s7=s6.trim()
console.log("After trim, length of String :"+s7.length);

// trimStart, it trims at left hand side only
let s8="   Program   "
console.log("Before trimStart, length of String :"+s8.length);
let s9=s8.trimStart()
console.log("After trimStart, length of String :"+s9.length);

// trimEnd, it trims at right hand side only
let s10="     Program     "
console.log("Before trimEnd, length of String :"+s10.length);
let s11=s10.trimStart()
console.log("After trimEnd, length of String :"+s11.length);

//valueOf, convert other datatype with String
let x1=340
console.log(typeof(x1));

let s12=""
console.log( typeof(s12.valueOf(x1)));

