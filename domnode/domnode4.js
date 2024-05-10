const list = document.getElementById('list');
list.addEventListener("mouseover",()=>{

    const ul = document.createElement("ul")
    const li1 = document.createElement("li")
    li1.innerHTML = "Apple"
    const li2 = document.createElement("li")
    li2.innerHTML = "Banana"
    const li3 = document.createElement("li")
    li3.innerHTML = "Mango"

    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)

    list.appendChild(ul)


})