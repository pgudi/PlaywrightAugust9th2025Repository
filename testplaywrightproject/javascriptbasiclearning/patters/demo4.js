/*
    Design the below pattern:

        1
        1 2
        1 2 3
        1 2 3 4
        1 2 3 4 5

        Make sure how many rows availalbe, in the above example 5 Rows
        Make sure how many columns availalbe, 1st row 1 column
        2nd row 2 columns
        3rd row 3 columns
        4th row 4 columns
        5th row 5 columns
*/
let pattern=""
for(let i=1;i<=5;i++)
{
    for(let j=1;j<=i;j++)
    {
        pattern=pattern+j+" "
        
    }
    pattern=pattern+"\n"
}
console.log(pattern);
    