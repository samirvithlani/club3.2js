const sum = ()=>{
    return 100
}

var ans = sum()
console.log(ans) // 100

const printData = ()=>{


    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data is fetched")
        }, 2000)
    })
}

// var pd = printData()
// //console.log(pd) 
// pd.then((data)=>{
//     console.log(data)
// })
// pd.catch((err)=>{
//     console.log(err)
// })


printData().then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})





