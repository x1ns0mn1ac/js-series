// for of loop

myArr = [1,2,4,5,6,7]

for(const num of myArr){
    // console.log(num)
}

// maps - dictionaries in python, only unique keys

const myMap = new Map
myMap.set("IN", "INDIA")
myMap.set("US", "USA")

// console.log(myMap)

for (const [key, value] of myMap){
    // console.log(key, value)
}

// for of doesnt wokr for objects
object1 = {
    rb: "ruby",
    jv: "java"
}
for(const key in object1) {
    // console.log(`${key} value is for ${object1[key]}`)
}

gyattRay = [5,8,10,234,56]

for(const key in gyattRay) {
    // console.log(gyattRay[key])

}

// Higher order loops

const coding = ["js", "cpp", "c#", "python"]

// coding.forEach( function (item) {
//     console.log(item);
// } )
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})


function printMe(itemss) {
    console.log(itemss);
}

coding.forEach( printMe )

/////////////////////

const myCoding = [
    {
        language: "python",
        extension: "py"
    },
    {
        language: "java",
        extension: "javay"
    },
    {
        language: "javascript",
        extension: "js"
    }
]

myCoding.forEach( (item) => {
    console.log(item.language)
})