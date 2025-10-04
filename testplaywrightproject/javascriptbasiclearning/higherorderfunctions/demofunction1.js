const radius = [2,4,1,6,5,8,10,7]

const calculateArea = function(radius){
    let result = []
    for(let i=0;i<radius.length;i++){
        result.push (Math.PI * radius[i] * radius[i])
    }
    return result
}

console.log(calculateArea(radius));

const calculateCircumference=function(radius){
    let result = []
    for(let i=0;i<radius.length;i++){
        result.push (2 * Math.PI * radius[i])
    }
    return result
}

console.log(calculateCircumference(radius));

const calculateDiameter = function (radius){
    let result = []
    for(let i=0;i<radius.length;i++){
        result.push(2 * radius[i])
    }
    return result
}
console.log(calculateDiameter(radius));
