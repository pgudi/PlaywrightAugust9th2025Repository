/*
   filter function on javascript array of object
*/

const employees = [
    {empno:11, ename:"Santosh", jobname:"Manager",salary:25000,age:22 },
    {empno:12, ename:"Vinith", jobname:"Analyst",salary:15000,age:25 },
    {empno:13, ename:"Srinivas", jobname:"Clerk",salary:10000,age:26 },
    {empno:14, ename:"Rohit", jobname:"Analyst",salary:17000,age:26 }
]

const names = employees.filter((x) =>{
    if(x.age ===26){
        return (x)
    }
}).map((y) =>{
    return (y.ename)
})

console.log(names);
