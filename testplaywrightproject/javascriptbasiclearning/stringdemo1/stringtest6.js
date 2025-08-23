/*
    String in built Function Part -04
*/

//find position of String from left to Right
let s1="It is a book, It is on table"
let x1=s1.indexOf("is",0)
console.log(x1)

let x2=s1.indexOf("It")
console.log(x2);

// find position from Right to Left
let x3=s1.lastIndexOf("is",15)
console.log(x3);
let x4=s1.lastIndexOf("is")
console.log(x4);

//repeat of the string
let s2="Welcome"
let s3=s2.repeat(5)
console.log(s3);

//padStart  padding at left handside
let s4="Good Morning"
let s5=s4.padStart(20,"#")
console.log(s5);

//padEnd, padding at right handside
let s6=s4.padEnd(20,'#')
console.log(s6);

