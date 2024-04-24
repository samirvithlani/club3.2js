const submitHandler =(event)=>{

    //all events of htm | js has event object
    event.preventDefault(); // preventDefault: to prevent the default behaviour of the form
    // console.log(event)
    // console.log("form submitted")

    var name = document.getElementById("name")
    console.log(name.value)
    
    var age = document.getElementById("age")
    console.log(age.value)

    var gender = document.getElementById("gender").checked
    // console.log(gender)
    // //console.log(gender)

    var color = document.getElementById("color")
    console.log(color.value)

    if(gender == true){
        console.log("male")
    }
    else{
        console.log("female")
    }
    

    const isSubmmited = document.getElementById("isSubmmited")
    isSubmmited.style.color = color.value
    isSubmmited.innerHTML = "Form Submitted"



    var nameoutput = document.getElementById("nameoutput")
    nameoutput.style.color = color.value
    nameoutput.innerHTML = name.value

    var ageoutput = document.getElementById("ageoutput")
    ageoutput.style.color = color.value
    ageoutput.innerHTML = age.value


}