/*
    String in javascript is immutable
    for each modification on String object, it creates saparate objects in memory
*/
let s="JavaScript"
console.log(s);
s.concat(" Programming")
console.log(s);
s.concat(" Language")
console.log(s);