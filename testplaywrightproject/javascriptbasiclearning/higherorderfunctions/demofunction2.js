const radius = [2,4,1,6,5,8,10,7]


const area = function(radius){
    return (Math.PI * radius * radius)
}

const circomference =function(radius){
    return (2 * Math.PI * radius)
}

const diameter = function(radius){
    return (2 * radius)
}

Array.prototype.calculate = function(logic){
    let result = []
    for(let i=0;i<this.length;i++){
        result.push (logic(this[i]))
    }
    return result
}

const circlearea= radius.calculate(area)
console.log(circlearea);

const circlecircumference=radius.calculate(circomference)
console.log(circlecircumference);

const circlediameter=radius.calculate(diameter)
console.log(circlediameter);
console.log("---------------------------------------");
const output1=radius.map(area)
console.log(output1);

const output2 = radius.map(circomference)
console.log(output2);

const output = radius.map(diameter)
console.log(output);
