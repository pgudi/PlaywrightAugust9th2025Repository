/*
   How to Export a Class
*/
class Employee{

    constructor(eid,ename,job,sal)
    {
        this.eid=eid;
        this.ename=ename;
        this.job=job;
        this.sal=sal;
    }

    getEmployeeId()
    {
        console.log("the Employee Id :"+this.eid)
    }

    getEmployeeName()
    {
        console.log("the Employee Name :"+this.ename)
    }

    getEmployeeJob(){
        console.log("the Employee Job :"+this.job)
    }

    getEmployeeSalary(){
        console.log("the Employee Salary :"+this.sal)
    }
}

module.exports = {Employee}