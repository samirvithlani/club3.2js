const removeElm =()=>{

    const mydiv = document.getElementById("mydiv");
    // mydiv.remove();
    const first = document.getElementById("first");
    first.remove();



}

const removeElm2 =()=>{

        var ptag = document.getElementsByTagName("p");
        console.log(ptag);
        ptag[0].remove();


}