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

const o1=new BasicMaths()
o1.addition(20,40)
o1.multiplication(12,10)

const o2=new BasicMaths()
o2.addition(50,40)
o2.multiplication(5,15)