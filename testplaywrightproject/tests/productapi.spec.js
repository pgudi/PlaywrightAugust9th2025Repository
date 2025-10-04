const {test, expect} = require('@playwright/test')
const { json } = require('stream/consumers')

test('Count of Products in Products API', async({request})=>{
    console.log("Count of Products in Products API");
    
    const response = await request.get('https://fakestoreapi.com/products')

    const jsonresponse = await response.json()
    let count=0
    for(let product of jsonresponse){
        count=count+1
    }
    console.log("Number of Product :"+count);    
})

test('Display All Products Titles from Products API', async({request})=>{
    console.log("Display All Products Titles from Products API");
    
    const response = await request.get('https://fakestoreapi.com/products')

    const jsonresponse = await response.json()
    for(let product of jsonresponse){
        console.log(product.title);
        
    }
 
})

test.only('Sum of Prices of All Products from Products API', async({request})=>{
    console.log("Sum of Prices of All Products from Products API");
    
    const response = await request.get('https://fakestoreapi.com/products')

    const jsonresponse = await response.json()
    let sum =0
    for(let product of jsonresponse){
        let price = product.price;
        sum=sum+price
    }
    console.log("Total of Price of All Products :"+sum);
    
})