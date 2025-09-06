/*
    How to delete / remove key from the existing object
*/

let student = {
    "firstname":"Santosh",
    "course":"Research and Science",
    "age":22
}

student.cityname="Dallas"
console.log(student.cityname)
console.log(student["cityname"]);

//Delete teh particualr Key
delete student.cityname;
//Read value based on key
console.log(student.cityname)