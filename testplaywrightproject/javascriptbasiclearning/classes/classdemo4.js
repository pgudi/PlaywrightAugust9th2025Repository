/*
    Functions with parameters in JavaScript Class
*/
class Maths{
    addition(x, y){
        console.log("Addition Result :"+(x + y));
        
    }

    multiplication(a,b){
        let result= (a * b);
        console.log("Multiplication Result :"+result);
        
    }
}

let o1=new Maths();
o1.addition(30,40)
o1.multiplication(12, 10)

o1.addition(100,50)
o1.multiplication(20,15)