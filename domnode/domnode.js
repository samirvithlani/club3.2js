const load = document.getElementById('load');
const h1Tag  = document.createElement("h1")
h1Tag.innerHTML = "Hello World"

const ptag = document.createElement("p")
ptag.innerHTML = "This is a paragraph"

load.appendChild(h1Tag)
load.appendChild(ptag)


var users = ["ram","shyam","hari","sita","gita"]
for(let i=0;i<users.length;i++){


    const userh4 = document.createElement("h4") // <h4>ram</h4> <h4>shyam</h4> <h4>hari</h4>
    userh4.innerHTML = users[i]


    load.appendChild(userh4) //h4, h4, h4

}

