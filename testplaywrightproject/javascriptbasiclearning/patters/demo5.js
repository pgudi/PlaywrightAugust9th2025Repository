let pattern=""
let x=1;
 while(x<=5)
{
    let y=1;
     while(y<=x)
    {
        pattern=pattern+y+" "
        y++;
    }
    pattern=pattern+"\n"
    x++;
}
console.log(pattern);
 