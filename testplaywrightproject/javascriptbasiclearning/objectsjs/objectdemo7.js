/*
    How to write functions in JavaScript Objects
    and How to Execute Those Functions which are available in JavaScript Objects
*/
let employee={
    "empid": 1001,
    "empname":"Santosh",
    "jobname":"Manager",
    "salary": 50000,
    "bonus": function ()
            {
                return (this.salary * 5/100);
            },
    "commission": function ()
                {
                    return (this.salary * 10/100);
                },
    "fullsalary": function ()
                  {
                     console.log("Full Salary :"+(this.salary + this.bonus() + this.commission()));
                     
                  }
}

// Read Values based on key
console.log(employee.empid);
console.log(employee.empname);
console.log(employee.jobname);
console.log(employee.salary);
console.log(employee.bonus());
console.log(employee.commission());
employee.fullsalary()