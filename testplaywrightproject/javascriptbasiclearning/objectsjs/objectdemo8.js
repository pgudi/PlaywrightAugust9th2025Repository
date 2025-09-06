/*
    Functions in JavaScript Objects , the function which do not return value

*/

let basicmaths = {
    "sumofnumbers": function()
                    {
                        let sum=0
                        for(let i=1;i<=10;i++){
                            sum=sum+i;
                        }
                        console.log("Sum of All Numbers :"+sum);
                        
                    },
    "factorialofnum" : function ()
                    {
                        let fact=1
                        let num=5
                        for(let i=num;i>=1;i--){
                            fact=fact * i;
                        }
                        console.log("Factorial of "+num+" is "+fact);
                        
                    }
}

basicmaths.sumofnumbers()
basicmaths.factorialofnum()