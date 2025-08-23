/*
    String in built Function Part -03
*/
// partial Matching of String
let s1="Bangalore is garden city of karnataka"
let v1=s1.startsWith("Bangalore")
console.log(v1);

let v2=s1.endsWith("karnataka")
console.log(v2);

let v3=s1.includes("garden123")
console.log(v3);

//Compare String1 and String2
let s2="JavaScript"
let s3="JAVASCRIPT"
let v4=s2.localeCompare(s3)
console.log(v4);

let s4="JAVASCRIPT"
let s5="JAVASCRIPT"
let v5=s4.localeCompare(s5)
console.log(v5);