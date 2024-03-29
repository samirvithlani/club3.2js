//array is group of elements


var languagues  = ["c","c++","java","python","javascript"]

// for(let i=0;i<languagues.length;i++){
//     console.log(languagues[i])
// }
console.log(languagues)
// console.log(languagues[0])
// console.log(languagues[1])
// console.log(languagues[2])

// len = languagues.length
// console.log(len)

languagues.push("ruby")
console.log(languagues)
languagues.unshift("c#")
console.log(languagues)

//pop
var remvedelm = languagues.pop()
console.log("removing..",remvedelm)
console.log(languagues)
var remvedelm = languagues.shift()
console.log("removing..",remvedelm)
console.log(languagues)
