function getCountOfNumbers(start, end){
    let count=0
    if(start>end){
            return 0;
        }
    for(let i=start;i<=end;i++)
    {
        if(i % 3 ==0){
            count=count+ 1
        }
    }

    return count;
}

let result=getCountOfNumbers(10,50)
console.log(result);
