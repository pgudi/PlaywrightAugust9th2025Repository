/*
     Concatenate all the Elements from the string Array
     Traditional Function
*/
function concateStringElements1(str){
    let result=""
   for(let i=0;i<str.length;i++){
     result=result+str[i]+" "
   }
   console.log(result);
   
}

let s=["Lotus","Tulip","Cosmos","sunflower"]
concateStringElements1(s)

/*
     Concatenate all the Elements from the string Array
     ananymous Function
*/
let concateStringElements2 = function (str){
    let result=""
   for(let i=0;i<str.length;i++){
     result=result+str[i]+" "
   }
   console.log(result);
   
}

let s1=["Lotus","Tulip","Cosmos","sunflower"]
concateStringElements2(s1)

/*
     Concatenate all the Elements from the string Array
     Arrow Function
*/
let concateStringElements3 = function (str){
    let result=""
   for(let i=0;i<str.length;i++){
     result=result+str[i]+" "
   }
   console.log(result);
   
}

let s2=["Lotus","Tulip","Cosmos","sunflower"]
concateStringElements3(s2)
