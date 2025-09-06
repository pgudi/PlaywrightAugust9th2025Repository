/*
    import the class Employee
*/

 const {Employee} = require('./exportclassdemo')

 //Create object or instance for this class
 let o = new Employee(101, "Santosh","Project Manager", 55000)

 o.getEmployeeId()
 o.getEmployeeName()
 o.getEmployeeJob()
 o.getEmployeeSalary()