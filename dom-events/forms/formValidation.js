function NameLen(){

    
    var name = document.getElementById("name")
    var nameError = document.getElementById("nameError")
    validateLen(name.value,nameError,"Name",3,8)
    
   
}

function EmailLen(){
    var email = document.getElementById("email")
    var emailError = document.getElementById("emailError")
    validateLen(email.value,emailError,"Email",1,30)
}


//param name,email,age.....
function validateLen(param,errorElement,fieldName,min,max)
{
   
    if(param!==undefined){
        // if(param.trim().length <3 || param.trim().length>8){
        if(param.trim().length <min|| param.trim().length>max){
            console.log(param)
            errorElement.innerHTML = fieldName+"  must be at least "+min+" characters"
        }
        else{
            errorElement.innerHTML = ""
        }
    }
    
}