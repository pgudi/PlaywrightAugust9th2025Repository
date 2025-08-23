/*
    Switch statement
    switch(expression){
        case <caseName1>:
            <statements>
            break;
        case <caseName2>:
                <statements>
                break;
        case <caseName3>:
            <statements>
            break;
        default:
            <default Statement>
    }
*/

let ch = 'Z'
switch(ch){
    case 'A':
        console.log("A is a Vowel");
        break;
    case 'E':
        console.log("E is a Vowel");
        break;
    case 'I':
        console.log("I is a Vowel");
        break;
    case 'O':
        console.log("O is a Vowel");
        break;
    case 'U':
        console.log("U is a Vowel");
        break;
    default:
        console.log(ch+" is not a Vowel");
        
}