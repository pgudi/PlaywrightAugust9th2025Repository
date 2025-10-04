const {test, expect} = require('@playwright/test')

test("Validate GET Employee API to validate specific Resource", async({request})=>{
    const response = await request.get("https://fakestoreapi.com/products/5")
    const jsonresponse = await response.json()
    console.log(jsonresponse);
    const productid=jsonresponse.id
    console.log("Product Id :"+productid);
    expect(await response.status()).toBe(200)
    
})