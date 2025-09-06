/*
   The number which is divisable by 1 and itself, is called as Prime Numbers
    12
    2 3 4 5 6 7 8 9 10 11

    The given is divisiable by each number, if it divided by any one number, then
    it is not a prime number,
*/
let num=12
let flag = 0
for(let i=2;i<=12;i++)
{
    if(num % i ==0)
    {
        flag = flag + 1
        break;
    }
}
if(flag == 0){
        console.log(num+ " is a Prime Number");
        
    }else {
        console.log(num+ " is not a Prime Number");
    }

