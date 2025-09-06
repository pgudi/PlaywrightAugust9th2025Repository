/*
    Programatically Assign Even numbers 20 to 40 into an array
    Read the Elements from the Array in Reverse order

    Step 1: make sure we can print numbers 20 to 40
    Step 2: from numbers 20 to 40 , display even numbers
    Step 3: create an array and assign elements
    Step 4: REad elements from the array in reverse order

*/
let a=[]
let k=0;
for(let i=20;i<=40;i++){
    if(i % 2 ==0 ){
        a[k]=i
        k=k+1
    }
    
}

//Read Elements in Reverse Order
for(let i=a.length-1;i>=0;i--){
    console.log(a[i]);
    
}

