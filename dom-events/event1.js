function changeText(){

    var x = document.getElementById("txt")
    console.log(x)
    console.log(x.innerHTML)
    x.innerHTML = "Hello World"
    x.style.color = "red"
    x.style.backgroundColor = "black"


}

const changeLink = ()=>{

    const link = document.getElementById("link")
    link.href = "https://www.netflix.com"
    link.innerHTML = "Netflix"
    link.target = "_blank"


}
const createBox = ()=>{

    const mydiv = document.getElementById("mydiv")
    mydiv.className = "box"



}