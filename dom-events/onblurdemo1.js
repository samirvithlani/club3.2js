
var emailData = ["test@gmail.com","ok@gmail.com"]


function show (){

    var email = document.getElementById('email').value
    var error = document.getElementById('error')
    if(emailData.includes(email)){
        error.innerHTML = "email has been taken.,"
    }
    else{
        error.innerHTML = "email is available"
    }


}