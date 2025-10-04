const {test, expect} = require('@playwright/test')
const { log } = require('console')
let employeeId=0
test.describe.serial('Execute Available Tests in Sequential Approach', () =>{
    test('Create Employee using POST HTTP Method', async({request})=>{
        console.log("This Test creates Employee using POST HTTP Method");
        
        const response = await request.post('http://localhost:9090/sgtesting/api/v1/employees',
            {
                data:{
                        "employeeFirstName": "Jones",
                        "employeeLastName": "Dsouza",
                        "jobName": "Sales Resprentative",
                        "emailId": "jones@salesmaket.com",
                        "age": 39,
                        "contactNumber": 8723456781,
                        "salary": 26000,
                        "departmentName": "Marketing",
                        "cityName": "Mangalore",
                        "address": "Beatch Road Neat Trinity Church"
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

    test('This Testcase displays Employee using GET HTTP Method', async({request})=>{
        console.log("This Test Displays Employee using GET HTTP Method");
        const response = await request.get('http://localhost:9090/sgtesting/api/v1/employees/'+employeeId)
        const jsonresponse=await response.json()
            console.log(jsonresponse);
            employeeId=jsonresponse.id
            console.log("Employee Id :"+employeeId);
            expect(await response.status()).toBe(200)
    })

    test('Modify Employee using PUT HTTP Method', async({request})=>{
        console.log("This Test Modifies Employee using PUT HTTP Method");
        
        const response = await request.put('http://localhost:9090/sgtesting/api/v1/employees/'+employeeId,
            {
                data:{
                        "employeeFirstName": "Jones",
                        "employeeLastName": "Dsouza",
                        "jobName": "Sales Resprentative",
                        "emailId": "jones@salesmaket.com",
                        "age": 39,
                        "contactNumber": 8723456781,
                        "salary": 26000,
                        "departmentName": "Whole Sale Distributor",
                        "cityName": "Mangalore",
                        "address": "Beatch Road Neat Trinity Church"
                },
                headers:{
                    "Accept":"application/json"
                }
            })
            const jsonresponse=await response.json()
            console.log(jsonresponse);
            employeeId=jsonresponse.id
            console.log("Employee Id :"+employeeId);
            expect(await response.status()).toBe(200)
    })

     test('This Testcase displays Employee using GET HTTP Method For PUT Request', async({request})=>{
        console.log("This Test Displays Employee using GET HTTP Method");
        const response = await request.get('http://localhost:9090/sgtesting/api/v1/employees/'+employeeId)
        const jsonresponse=await response.json()
            console.log(jsonresponse);
            employeeId=jsonresponse.id
            console.log("Employee Id :"+employeeId);
            expect(await response.status()).toBe(200)
    })

     test('This Testcase Deletes Employee using DELETE HTTP Method', async({request})=>{
        console.log("This Test Displays Employee using DELETE HTTP Method");
        const response = await request.delete('http://localhost:9090/sgtesting/api/v1/employees/'+employeeId)
        const jsonresponse=await response.body()
            console.log(jsonresponse);
            expect(await response.status()).toBe(200)
    })
})