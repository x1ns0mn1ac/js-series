

var c = 200

if (true) {
    let a = 10
    const b = 20
    var c = 30 // c = 30 is also same
}

console.log(c);

function one(){
    const username = "hitesh"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    console.log(website);
    two()
}

one()
