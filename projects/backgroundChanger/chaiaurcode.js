
const randomColor  = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;

}

let intervalId;

const startChanging = function() {
    function changeBg() {
        document.body.style.backgroundColor = randomColor();
    }

    if(!intervalId){
        intervalId = setInterval(changeBg, 1000);
}}

const stopChanging = function() {
    clearInterval(intervalId);
    intervalId = null;
}

document.getElementById('start').addEventListener('click', startChanging);
document.getElementById('stop').addEventListener('click', stopChanging);


console.log(randomColor());
