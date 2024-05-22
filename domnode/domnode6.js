const removeElm =()=>{

    const mydiv = document.getElementById("mydiv");
    // mydiv.remove();
    const first = document.getElementById("first");
    first.remove();



}

const removeElm2 =()=>{

        // var myDiv = document.getElementById("mydiv");
        // var ptag = myDiv.getElementsByTagName("p");
        // console.log(ptag);
        // ptag[0].remove();


        var myDiv = document.getElementById("mydiv");
        console.log(myDiv.lastElementChild);


}