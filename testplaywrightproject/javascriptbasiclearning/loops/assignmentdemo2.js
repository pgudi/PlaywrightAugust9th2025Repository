/*
   find count of numbers in between 20 to 60, which are divisiable by 4
   Step 1: make sure whether can i print numbers 20 to 60
   Step 2: in between numbers 20 to 60, print numbers which are divisiable by 4
   Step 3: find the count of numbers [Arithmetic Assignment oeprators]
*/
let count=0
for(let i=20;i<=60;i++){
    
    if(i % 4 == 0){
       count=count+1
    }
    
}
console.log("Count of numbers :"+count);
