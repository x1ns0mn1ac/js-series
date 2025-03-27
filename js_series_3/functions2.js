function calculateCartPrice(val1, val2, ...num1) { //rest operator
    return num1
}

console.log(calculateCartPrice(2, 3, 1000, 300));


const user = {
    username: "Rakesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "lolipop",
    price: 5000
})

const myNewArray = [200, 500, 2000, 250]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([500, 200, 3000]));
