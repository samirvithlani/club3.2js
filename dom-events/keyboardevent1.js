function getData(){

    var data = document.getElementById("txt");
    var txterr = document.getElementById("txterr"); //p tag
    console.log(data.value);
    var output = document.getElementById("output");
    output.innerHTML = data.value;



    if(data.value.length <=3){
        //alert("Please enter atleast 3 characters");
        txterr.innerHTML = "Please enter atleast 3 characters";
    }
    else{
        txterr.innerHTML = "";
    }
}