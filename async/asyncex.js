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
        }, 300);
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
    searchInput.setAttribute("id","searching")
    searchbox.appendChild(searchInput);
    //a

    searchInput.addEventListener("keyup",()=>{
        //const searchValue = e.target.value;
        const searchValue = document.getElementById("searching").value;
        searchValue.toLowerCase();
        const filteredUsers = allUsers.filter((user)=>{
            return user.name.toLowerCase().includes(searchValue);
        })
        console.log(filteredUsers);
        main.innerHTML = "";
        for(let i =0;i<filteredUsers.length;i++){
            const p = document.createElement("p");
            p.innerHTML = filteredUsers[i].id + " "+filteredUsers[i].name;
            main.appendChild(p);
        }
        

    })



    for(let i =0;i<allUsers.length;i++){
        const p = document.createElement("p");
        p.innerHTML = allUsers[i].id + " "+allUsers[i].name;
        main.appendChild(p);
    }


}
printUsers();
