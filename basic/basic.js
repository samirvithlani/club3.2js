//printf()

//console is an object
//log is a method
console.log("Hello World");
console.info("Hello World");
console.warn("Hello World");
console.error("Hello World");


//var let const

//var is having global scope
//let is having block scope
//const is having block scope and it is constant

var a = 10;
console.log(a);
console.log("value of a = " , a);


let b = 20
console.log(b)
console.log("value of b = " , b)

{
    var x = 200
    let y = 300

    console.log("value of in block x = " , x)
    console.log("value of in block y = " , y)
}
console.log("value of out block x = " , x)
//console.log("value of out block y = " , y) error

const pi = 3.14
console.log("value of pi = " , pi)
pi = pi + 1