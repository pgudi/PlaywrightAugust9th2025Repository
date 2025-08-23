/*
     if multiple case blocks are performing same task,
     instead of writing a separate case blcok, write them in a single line
*/

let ch = 'O'
switch(ch){
    case 'A':case 'E':case 'I':case 'O':case 'U':
        console.log(ch+" is a Vowel");
        break;
    
    default:
        console.log(ch+" is not a Vowel");
        
}