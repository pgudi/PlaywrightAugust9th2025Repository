const {test, expect} = require('@playwright/test')
const testdata1 = require('./../datafiles/data1.json')
const testdata2 = require('./../datafiles/data2.json')
const testdata3 = require('./../datafiles/data3.json')

test('Read Content from JSON File', async({page})=>{

    console.log("First Name :"+testdata1.fname);
    console.log("Course Name :"+testdata1.course);
    
})

test('Read content from Array of JSON File', async ({page})=>{
    for(let data of testdata2){
        console.log("first Name :"+data.fname)
        console.log("Course Name :"+data.course)
    }
})

test.only('Read content from Nested Json Object File', async({page})=>{
    console.log("first Name :"+testdata3.user1.fname);
    console.log("Course Name :"+testdata3.user1.course);

    console.log("first Name :"+testdata3.user2.fname);
    console.log("Course Name :"+testdata3.user2.course);
})

