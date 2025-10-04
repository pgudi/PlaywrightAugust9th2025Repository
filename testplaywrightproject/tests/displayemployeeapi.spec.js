const {test, expect} = require('@playwright/test')

test('Count of Employees in Employees API', async({request})=>{
    const response = await request.get('http://localhost:9090/sgtesting/api/v1/employees')

    const jsonresponse = await response.json()
    for(let employee of jsonresponse){
        console.log("Employee Id :"+employee.id);
        
    }
    
    
})