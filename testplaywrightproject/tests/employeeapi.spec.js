const {test, expect} = require('@playwright/test')

test("Validate GET Employee API to validate specific Resource", async({request})=>{
    const response = await request.get("http://localhost:9090/sgtesting/api/v1/employees/2")
    const jsonresponse = await response.json()
    console.log(jsonresponse);
    const employeeId=jsonresponse.id
    console.log("Employee Id :"+employeeId);
    expect(await response.status()).toBe(200)
    
})