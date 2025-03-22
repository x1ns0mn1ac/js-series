

function sayMyName() {
    console.log("R");
    console.log("O");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
}

// sayMyName() // () parenthesis for execution

// function addTwoNumbers(number1, number2){ // 1 and 2 are parameters
//     console.log(number1 + number2);
    
// }
function addTwoNumbers(number1, number2){ // 1 and 2 are parameters
    
    // let result = number1 + number2
    
    // return result
    return number1 + number2
    console.log("roshan");
    
}

const result = addTwoNumbers(3, 4) // 3 and 4 are arguments
console.log("result:", result);

function loginUserMessage(username = "sam"){
    if(username === undefined) { // if(!username)
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());


