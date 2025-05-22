//Global Variables
let first = 0; //First Operand
let second = 0;//Second Operand
let operator = ""; //Operation to perform
let firstSet = false; //determines if an incoming number goes to 1st or 2nd operand
let useAcc = false; //determines if the acc should be used in lieu of the first operand
let acc = 0; //accumulator


// Arithmetic Functions (+,-,x,/) and the evaluate function that parses and controls which one is used
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

function evaluate(op,num,denom)
{
    if (op == "+")
    {
        return add(num,denom);
    }
    else if (op == "-")
    {
        return sub(num,denom);      
    }
    else if (op == "x")
    {
        return mult(num,denom);
    }
    else if (op == "/")
    {
        return div(num,denom);    
    }    
    else
    {
        console.log("ERROR: INVALID INPUT")
    }
}

function text2number(value)
{
    switch(value)
    {
        case "zero":
            return 0
        case "one":
            return 1
        case "two":
            return 2
        case "three":
            return 3
        case "four":
            return 4
        case "five":
            return 5
        case "six":
            return 6
        case "seven":
            return 7
        case "eight":
            return 8
        case "nine":
            return 9
    }
    return -1
}

//TODO
function updateDisplay(value)
{
    //get the display element
    //update element value
}

//TODO
function buttonClicked(event)
{
    console.log("A button has been pressed");
    console.log(event.target.classList.value);
    console.log(event.target.id);
    
    if(event.target.classList.value == "operator")
    {
        //operator Case
        //if op == "" and operator is == "="
            //do nothing
        //else if op == ""
            //set operator
            //set first_set == True
            //replace first with acc if you need to use acc
        //else if operator != "="
            //first = evaluate(op,first,second)
            //use_acc= False
            //first_set = True
            //second = 0
            //op = operation
            //update_display
        //else
            // acc = eval(op,first,second)
            // update_display
            //first_set = False
            // first = second= 0
            //use_acc = True
            //op = ""
        
    }
    else // number case
    {
        // number case
        // convert number
        //determine if value should go in first or second register
        //update register
        //update display
    }


    return
}



let calcElem = document.querySelector(".calculator");
calcElem.addEventListener('click',buttonClicked);
