class BasicMaths
{
    addition(x,y){
        let res=(x + y)
        console.log("Addition Result :"+res);
        
    }
}

BasicMaths.prototype.multiplication= function(x,y){
                                        let result = (x * y)
                                        console.log("Multiplication Result :"+result);
                                        
                                    }

BasicMaths.prototype.substraction = (x,y) =>{
                                        let result = (x - y)
                                        console.log("Substraction Result :"+result);
                                    }

const o1=new BasicMaths()
o1.addition(20,40)
o1.multiplication(12,10)
o1.substraction(90,40)

const o2=new BasicMaths()
o2.addition(50,40)
o2.multiplication(5,15)
o2.substraction(40,15)