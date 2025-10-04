/*
   map function on javascript array of object
*/

const employees = [
    {empno:11, ename:"Santosh", jobname:"Manager",salary:25000,age:22 },
    {empno:12, ename:"Vinith", jobname:"Analyst",salary:15000,age:25 },
    {empno:13, ename:"Srinivas", jobname:"Clerk",salary:10000,age:26 },
    {empno:14, ename:"Rohit", jobname:"Analyst",salary:17000,age:26 }
]

const employeesnames = employees.map((x) =>{
    return (x.ename)
})

console.log(employeesnames);
console.log("--------------------------------------------");

const nameandjob= employees.map((x) =>{
    return ("Employee Name is "+x.ename+" and working as "+x.jobname)
})

console.log(nameandjob);

