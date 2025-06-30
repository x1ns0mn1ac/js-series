const emptyArr = []
const emptyString = ""

if (emptyArr){
    console.log("not empty")
}   else{
    console.log("empty yes")
}
if (emptyString){
    console.log("executed")
}   else{
    console.log("notexecuted")
}

// false values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// truthy

// "0", 'false', " ", [], {}, function(){} 

// for empty check of array use array.length === 0

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("yes its falsy")
}