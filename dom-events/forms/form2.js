function submitHandler(event) {
  event.preventDefault()
  
    var name = document.getElementById('name') 
    var nameError = document.getElementById('nameError')

    var age =document.getElementById("age")
    var ageError = document.getElementById("ageError")
    //name.valeue // string

    if(name.value.length<=3){
        nameError.innerHTML = "minimum of 4 characters are required"
    }
    else{
        console.log(name.value)
        nameError.innerHTML = ""
    }
    checkAge()

}

function checkAge(){


    var age = document.getElementById("age")
    var ageError = document.getElementById("ageError")
    if(age.value == undefined || age.value<18){
        ageError.innerHTML = "You are not eligible"
    }
    else{
        ageError.innerHTML = ""
        console.log(age.value)
    }


}