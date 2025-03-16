// const tinderUser = new Object() - singleton object
const tinderUser = {} 

tinderUser.id = "123abc"
tinderUser.name = "Santosh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Santosh",
            lastname: "Kansal"
        }
    }    
}

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2}
// console.log(obj3);

const obj4 = Object.assign({}, obj1, obj2) // always good to have {} here as it wokrs as target empty objects, 
// else obj1 will be target
// console.log(obj4);

const obj5 = {...obj1, ...obj2} // spread operator
console.log(obj5);

const users = [

    {
        id: 1,
        email: "h@gmail"
    },
    {
        id: 2,
        email: "i@gmail"
    },
    {
        id: 3,
        email: "@gmail"
    }
]

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
