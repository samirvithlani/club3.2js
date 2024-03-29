var data = ["ram","shyam","amit","hari","seeta"]

//d data[i]
// data.forEach(function(d){
//     console.log(d)
// })

// data.forEach((d)=>{
//     console.log(d)
// })

//map and foreach --> map have return type of same length of array
//for each have no return type
// data.map((d)=>{
//     console.log(d)
// })


var data1 = data.map((d)=>{

    return d.toUpperCase()
})
console.log(data)
console.log(data1)



// for(let i=0;i<data.length;i++){
//     console.log(data[i])
// }
