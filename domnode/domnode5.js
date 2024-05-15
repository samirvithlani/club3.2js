var users = [
  {
    id: 1001,
    name: "Rahul",
    email: "rahul@gmail.com",
    age: 21,
    marks: 70,
  },
  {
    id: 1002,
    name: "Raj",
    email: "raj@gmail.com",
    age: 22,
    marks: 76,
  },
  {
    id: 1003,
    name: "Parth",
    email: "parth@gmail.com",
    age: 21,
    marks: 89,
  },
  {
    id: 1004,
    name: "Rohan",
    email: "rohan@gmail.com",
    age: 23,
    marks: 90,
  },
];

const showTable = () => {
  const tbody = document.getElementById("tbody");
  for (let i = 0; i < users.length; i++) {
    const tr = document.createElement("tr"); //<tr>

    const idTD = document.createElement("td"); //<td>
    idTD.innerHTML = users[i].id;

    const nameTD = document.createElement("td"); //<td>
    nameTD.innerHTML = users[i].name;

    const emailTD = document.createElement("td"); //<td>
    emailTD.innerHTML = users[i].email;

    const ageTD = document.createElement("td"); //<td>
    ageTD.innerHTML = users[i].age;

    const marksTD = document.createElement("td"); //<td>
    if(users[i].marks>=80){
        marksTD.style.color = "red";
    }
    marksTD.innerHTML = users[i].marks;

    

    tr.appendChild(idTD);
    tr.appendChild(nameTD);
    tr.appendChild(ageTD);
    tr.appendChild(emailTD);

    tr.appendChild(marksTD);

    tbody.appendChild(tr);
  }
};
