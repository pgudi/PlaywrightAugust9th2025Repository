
/*
    Read Key and value pair from javascript objects
*/
let student = {
    "firstname":"Santosh",
    "course":"Research and Science",
    "age":22,
    "cityname":"California"
}

//Read values
for(let x in student)
{
    console.log(x +"  -> "+ student[x]);
    
}