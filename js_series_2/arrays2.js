const marvel = ["thor", "iron"]
const dc = ["superman", "flash", "batman"]

// marvel.push(dc)
// console.log(marvel);
// console.log(marvel[2][2]);

const myArr = marvel.concat(dc);
console.log(myArr);

const newhores = [...marvel, ...dc]
console.log(newhores);

const onearr = [1, 2, 3, [4, 5, 6], 7, [8,[9,0]]];
const another1arr = onearr.flat(2)
console.log(another1arr);

console.log(Array.isArray("mithu"))
console.log(Array.from("mithu"))
console.log(Array.from({name: "mithu"}))

let score1 = 100
let score2 = 300
let score3 = 200

console.log(Array.of(score1, score2, score3));
