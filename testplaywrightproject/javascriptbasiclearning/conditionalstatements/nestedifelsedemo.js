/*
   Nested if else
    if(condition){
        <statement1>
   }else if(condition2){
        <statement2>
   }else if(condition3){
        <statement3>
   }else{
        <else statement>
    }
*/
let marks = 101
if((marks>=70) && (marks<=100)){
    console.log("Result is FCD!!!"); 
} else if((marks<70) && (marks>=60)){
    console.log("Result is First Class!!!"); 
} else if((marks<60) && (marks>=50)){
    console.log("Result is Second Class!!!"); 
} else if((marks<50) && (marks>=35)){
    console.log("Result is Pass Class!!!"); 
}else if((marks<35) && (marks>=0)){
    console.log("Result has failed!!!"); 
}else {
    console.log("Invalid Marks!!!");
    
}