var users = [
  {
    id: 1,
    name: "amit",
    age: 30,
  },
  {
    id: 2,
    name: "sumit",
    age: 20,
  },
  {
    id: 3,
    name: "ram",
    age: 25,
  },
];

const fetchAllUsers = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    }, 3000);
  });
};

//function async

async function printUsers() {
  console.log("Start");
  const users = await fetchAllUsers(); //3
  console.log(users);
  console.log("End");
}
printUsers();


// console.log("Start");
// fetchAllUsers().then((users)=>{
//     console.log(users);
// }).catch((err)=>{
//     console.log(err);
// })
// console.log("End");
