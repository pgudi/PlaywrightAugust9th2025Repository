/*
    Verify the given numebr is prime or not
*/

let isPrime =(number)=>{
    let flag=0
    for(let i=2;i<number;i++){
        if(number % i ==0){
            flag=flag +1
            break;
        }
    }
    if(flag==0){
        return true
    }else{
        return false
    }
}

//First Approach
let v1=isPrime(115)
console.log(v1);
console.log("----------------------------------------------");
//Second Approach, print prime numbers in between 1 to 50
for(let i=1;i<=50;i++){
    if(isPrime(i)==true){
        console.log(i);
        
    }
}
console.log("----------------------------------------------");
// Third Approach, find sum of all prime nulbers in between 1 to 30
let sum=0
for(let i=1;i<=30;i++){
    if(isPrime(i)==true){
        sum=sum+i
        
    } 
}
console.log("sum of Prime Numbers :"+sum);
console.log("----------------------------------------------");
// Fourth Approach, find count of all prime nulbers in between 50 to 100
let count=0
for(let i=50;i<=100;i++){
    if(isPrime(i)==true){
        count+=1
        
    } 
}
console.log("Count of Prime Numbers :"+count);
