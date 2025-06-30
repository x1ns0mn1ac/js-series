// immediately invoked function expression ()()

(function chai(){
    console.log("db mall bharti out boys")
})(); // very important semicolon here

( () => {
    console.log("db mall bharti out boys 2")
})();
( (name) => {
    console.log(`db mall selected ${name}`)
})("prakhar");


