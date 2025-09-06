/*
    declare a class and declare variables using setter and execute them
*/
class Person
{
    setfirstName(){
        return "Santosh"
    }

    setJobName(){
        return "Senior Manager"
    }

    setAge(){
        return 22;
    }
}

let o = new Person()
console.log(o.setfirstName());
console.log(o.setJobName());
console.log(o.setAge());