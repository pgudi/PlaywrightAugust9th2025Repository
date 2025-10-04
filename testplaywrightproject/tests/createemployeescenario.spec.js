const {test, expect} = require('@playwright/test')
//CreateEmployee -> displayEmployee -> DeleteEmployee
let employeeId=0
test.describe.serial('Execute Tests is Serial Approach', () =>{

    test('Create Employee using POST Method', async({request})=>{
    console.log("This test create Employee in the database using POST HTTP Method")
    const response = await request.post('http://localhost:9090/sgtesting/api/v1/employees',
        {
            data:{
                    "employeeFirstName": "Bhagat",
                    "employeeLastName": "Singh",
                    "jobName": "Fredom Fighter",
                    "emailId": "bhaghat@gss.com",
                    "age": 21,
                    "contactNumber": 91234560708,
                    "salary": 75000,
                    "departmentName": "Govt. Department",
                    "cityName": "Bangalore",
                    "address": "Neat to Vkas Soudha",
            },
            headers:{
                "Accept":"application/json"
            }
        })
        const jsonresponse=await response.json()
        console.log(jsonresponse);
        employeeId=jsonresponse.id
        console.log("Employee Id :"+employeeId);
        expect(await response.status()).toBe(201)    
    })

    test('Display Employee using GET Method', async({request})=>{
        console.log("This test displays Employee from the database using GET HTTP Method");
        const response=await request.get("http://localhost:9090/sgtesting/api/v1/employees/"+employeeId)
        const jsonresponse=await response.json()
        console.log(jsonresponse);
        expect(await response.status()).toBe(200)   
    })

    test('Delete Employee using DELETE Method', async({request})=>{
        console.log("This test deletes Employee from the database using DELETE HTTP Method");
        const response=await request.get("http://localhost:9090/sgtesting/api/v1/employees/"+employeeId)
        const jsonresponse=await response.body()
        console.log(jsonresponse);
        expect(await response.status()).toBe(200)   
    })
})
