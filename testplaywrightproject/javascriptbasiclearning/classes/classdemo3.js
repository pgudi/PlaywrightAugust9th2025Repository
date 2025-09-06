/*
    How to write functions in JavaScript Class
    These function do not have parameters
    How to execute Functions from Class
*/

class Maths
{
    addition(){
        let x,y;
        x=40;y=30;
        console.log("Addition Result :"+(x + y));
        
    }

    multiplication(){
        let x,y;
        x=12;y=15;
        console.log("Multiplication Result :"+(x * y));
        
    }
}

let o1=new Maths();
o1.addition()
o1.multiplication()

let o2=new Maths();
o2.addition()
o2.multiplication()