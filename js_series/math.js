const score = 400
console.log(score);

const scoreNew = new Number(500)
console.log(scoreNew);
console.log(scoreNew.toString().length)
console.log(scoreNew.toFixed(2))

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-24));
console.log(Math.round(-2.0004));
console.log(Math.min(4, 0, 19, 23));
console.log(Math.floor(Math.random()*100) +1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))