/*
    How to create/declare instance variabels in a class /
    How to write a No-args constructor in a class
*/
class Product
{
    constructor(){
        this.prodid=101;
        this.prodname="Levovo Laptop";
        this.price = 45000;
    }
}

let o=new Product()
console.log("Product Id :"+o.prodid);
console.log("Product Name :"+o.prodname);
console.log("Product Price :"+o.price);