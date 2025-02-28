// two types of Data based on how data is Stored 

// #primitive
// 7 types 
// string, number, boolean, null, undefined, symbol, BigInt

// JS dynamically typed language

// #reference non primitive
// Array, objects, functions

const id = Symbol('123)')
const anotherid = Symbol('123')

//console.log(id === anotherid);

const myArray = ["sdlfkds", "jdfdskf"];


let myObj = {
    name: "hitesh",
    age: 123,
}

const myFunction = function(){
    //console.log("Hellow worldo");
}

// ---------------------------

// stack - it references a copy instead of the original
// heap - it references the original 

let myEmail = "jerrythemouse@gmail.com"
let herEmail = myEmail
herEmail = "tomthecat@gmail.com"

console.log(myEmail);
console.log(herEmail);

let myName = {
    name: "shaggy"
}

let herName = myName
herName.name = "velma"

console.log(myName.name);
console.log(herName.name);


