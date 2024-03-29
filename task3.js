var name = "raj" //3 0 1 2
var x =""
//reverse string...
for (var i = name.length - 1; i >= 0; i--) {
    console.log(name[i]) //r a j
    x = x.concat(name[i]) //jar
}
console.log("x--",x)

if(name == x){
    console.log("palindrome")
}
else{
    console.log("not palindrome")
}
