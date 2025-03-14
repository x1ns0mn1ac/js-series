// singleton - constructer

// object literals

const mySym = Symbol("key1")

Object.create // constructer
const JsUser = {
    name: "Manan",
    "full name": "Sanan Jain",
    [mySym]: "mykey1",
    age: 18,
    location: "bhopal",
    isLoggedIn: false
}

// console.log(JsUser.location);
// console.log(JsUser["location"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.age = 25
// Object.freeze(JsUser)
JsUser.age = 34

// JsUser.greeting = function(){
//     console.log("hello js user")}
JsUser.greeting = function(){
    console.log(`hello js user, ${this.name}`) // backticks hai bsdk not single qoutes
    
}
console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser);
