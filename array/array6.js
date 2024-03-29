var sales = [10,20,30,40,44,32,56]


sales = sales.map((sale)=>{
    //sale - 10
    //sale - 20
    //sale - 30
    //sale - 40
    return sale + 10
})

//console.log(sales)



var price = [20,30,40,50,60,70,80,90,100]
console.log(price)
price = price.map((p)=>{

    return p-= p * 10/100

})
console.log(price)
