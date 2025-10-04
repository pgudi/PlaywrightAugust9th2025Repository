

function Customer(){
    this.cName="Santosh"
    this.location="Bangalore"
}

Customer.prototype.prodname="Lenovo Laptop"

const o1=new Customer();
console.log(o1.cName,o1.location, o1.prodname);

const o2=new Customer();
console.log(o2.cName,o2.location, o2.prodname);
