// array

// const myArr = [0, 1, 2, 3, 4, 5, true, "shige"];
// elements do not have to be the same type]
// js arrays are resizable

const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[6]);
// console.log(myArr.length);

const myArr3 = [];

myArr3.push(7);
// myArr3.pop();
myArr3.unshift(9);
// myArr3.shift();
console.log(myArr3);
console.log(myArr3.includes(5));
console.log(myArr3.indexOf(5)); // gives -1

const newArr = myArr3.join(); // newArr is a string
console.log(newArr);
console.log(myArr3);

const myArr = [0, 1, 2, 3, 4, 5]
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // removes from array
console.log("C ", myArr);
console.log(myn2);




