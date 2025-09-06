/*
    How to create/declare instance variabels in a class /
    How to write a No-args constructor in a class
*/
class Product
{
    constructor(id, pname, price){
        this.prodid=id;
        this.prodname=pname;
        this.price = price;
    }
}

let o=new Product(102, "Dell Keyboard", 1750)
console.log("Product Id :"+o.prodid);
console.log("Product Name :"+o.prodname);
console.log("Product Price :"+o.price);