const user = {
    username: "gambhir",
    prince: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to the server`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "ghatotkach"
// user.welcomeMessage()
console.log(this)

// see what this is doing is that it is referring to the current object. thats it ig

function tussi(){
    username = "higgu"
    // console.log(this)
    console.log(this.username) // returns higgu
}

tussi()

const arrowww = () => {
    username = "hitesh"
    console.log(this)
    console.log(this.username) //undefined
}

arrowww()

// implicit return

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "higggeur"})

console.log(addTwo(2,17))