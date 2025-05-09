function add(num,denom)
{
    return num + denom;
}

function sub(num,denom)
{
    return num - denom;
}

function mult(num,denom)
{
    return num * denom;
}

function div(num,denom)
{
    if (denom == 0)
    {
        console.log("ERROR: Cannot divide by zero")
    }
    return num/denom;
}

let first = 0;
let second = 0;
let operator = "";
let firstSet = false;
let secondSet = false;
let acc = 0;


//When a button gets pressed
    //if it is an operator
        //if there is a value in the acc
        //place into appropriate variable
        //determine if evaluation is needed (first and second are both set+ set both to false afterwards)
            //move result to first
        //replace operator with new operator (except =)
    //if it is a number
        //multiply acc by 10
        //add the new number
    //if clear
        //first= second = 0
        //operator = ""
        //firstSet = secondSet = false;
        //acc = 0

