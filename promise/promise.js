const getUserData =()=>{

    console.log("fetching user Data....")

    //resolve and reject are the two functions that are passed to the promise constructor
    var promise = new Promise((resolve,reject)=>{

        setTimeout(() => {
            //resolve("User Data fetched successfully")    
            reject("User Data not fetched successfully")
        }, 3000);
        
    })

    console.log(promise)
    //data -->"User Data fetched successfully"
    promise.then((data)=>{
        console.log(data)
    })
    promise.catch((error)=>{
        console.log(error)
    })
}

//getUserData()

const printUserData =()=>{


    console.log("fetching user Data....start")
    var promise = new Promise((resolve,reject)=>{
        
        setTimeout(()=>{
            resolve({name:"John",age:25})
            //reject({message:"printer not found..."})
        },2000)


    })

    console.log(promise)
    promise.then((data)=>{
        console.log(data)
    })
    promise.catch((error)=>{
        console.log(error)
    })

    console.log("fetching user Data....end")

}
printUserData()