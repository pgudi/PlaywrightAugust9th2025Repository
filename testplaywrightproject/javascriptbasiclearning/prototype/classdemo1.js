class Person
{
    constructor(pid,pname){
        this.pid=pid
        this.pname=pname
    }
}

Person.prototype.location = "California"

const o1=new Person(1, "Santosh")
console.log(o1.pid, o1.pname, o1.location);

const o2=new Person(2, "Srinivas")
console.log(o2.pid, o2.pname, o2.location);