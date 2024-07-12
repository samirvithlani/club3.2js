const users = [
    {
        id:1,
        name:"Amit"
    },
    {
        id:2,
        name:"Rahul"
    },
    {
        id:3,
        name:"Raj"
    },
    {
        id:4,
        name:"Ravi"
    }
]


const fetchUsers = () =>{


    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            resolve(users);
        }, 3000);
    })


}

const printUsers = async () =>{


    const main = document.getElementById("main");
    const loader = document.getElementById("loading");
    loader.innerHTML = "Loading....";
    const allUsers = await fetchUsers();
    loader.innerHTML = "";

    const searchbox = document.getElementById("searchtag");
    const searchInput = document.createElement("input");
    searchInput.setAttribute("type","text");
    searchbox.appendChild(searchInput);



    for(let i =0;i<allUsers.length;i++){
        const p = document.createElement("p");
        p.innerHTML = allUsers[i].id + " "+allUsers[i].name;
        main.appendChild(p);
    }


}
printUsers();
