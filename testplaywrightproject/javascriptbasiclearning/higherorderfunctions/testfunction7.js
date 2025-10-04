/*
   reduce function on javascript array of object
*/

const employees = [
    {empno:11, ename:"Santosh", jobname:"Manager",salary:25000,age:22 },
    {empno:12, ename:"Vinith", jobname:"Analyst",salary:15000,age:25 },
    {empno:13, ename:"Srinivas", jobname:"Clerk",salary:10000,age:26 },
    {empno:14, ename:"Rohit", jobname:"Analyst",salary:17000,age:26 }
]

// {26:2, 25:1, 22: 1}

// { Analyst: 2, Manager: 1, Clerk: 1}

const result = employees.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++ acc[curr.age]
    }else{
        acc[curr.age] =1
    }
    return acc
},{})

console.log(result);

console.log("-------------------------------------------");
const resultjob = employees.reduce(function(acc, curr){
    if(acc[curr.jobname]){
        acc[curr.jobname] = ++ acc[curr.jobname]
    }else{
        acc[curr.jobname] =1
    }
    return acc
},{})

console.log(resultjob);

