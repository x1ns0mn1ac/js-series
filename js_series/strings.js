const name = "shige"
const repoCount = 50

// console.log(`hello my name is ${name} and myu repocount is ${repoCount}`);

// these are backticks not single qoutes

const gameName = new String('kasanoteto')

console.log(gameName);
console.log(gameName.__proto__);
console.log(gameName.length);

const newString = gameName.slice(0, 4);
const newString2 = gameName.substring(0, 4);

console.log(newString)
console.log(newString2)

const newstring3 = "      kasano   teto      "
console.log(newstring3.trim());

const url = "google.com/kasano%20teto"
console.log(url.replace('%20', '-'));

console.log(url.includes('teto'))
console.log(url.includes('miku'))
