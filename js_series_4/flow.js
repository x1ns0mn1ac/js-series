// if

if (2 == "2"){
    console.log("executed")
}
if (2 === "2"){ // wont run this one also checks type
    console.log("executed")
}

balance = 400
if(balance > 500) console.log("yessir") // implicit scope

if(balance < 7000){
    console.log("ji ha")
} else if(balance == 400){
    console.log("four hundred")
} else{
    console.log("start earning bruh")
}

// && - and
// || - or

// switch case

const month = 3

switch(month) {
    case 1:
        break;
    case 2:
        break;
    case 3:
        console.log("March 7th yeahhhhh");
        break;
    default:
        console.log("incorrectttt")
        break;
}

// ?? nullish coalescing operator ??: null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 10

console.log(val1)

// terniary operator
// condition ? True : False

const iceTea = 100
iceTea >= 80 ? console.log("greater") : console.log("lower")
