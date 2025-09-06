/*
    0 1 1 2 3 5 8 13 21 34 55 89

    fn=0; sn=1;
    tn=fn + sn
    fourth= sn + tn
    fifth= tn + fourth
    sixth = fourth + fifth
*/

let fn,sn;
fn=0; sn=1;
console.log(fn+" ")
console.log(sn+" ");

for(let i=1;i<=8;i++)
{
    let tn=(fn+sn)
    fn=sn
    sn=tn

    console.log(tn);
    
}