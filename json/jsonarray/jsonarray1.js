var students =[
    {
        id: 1,
        name:"raj",
        age: 20
    },
    {
        id: 2,
        name:"ajay",
        age: 21
    },
    {
        id: 3,
        name:"vijay",
        age: 22
    }
]

console.log(students)
// console.log(students[0].name)
// console.log(students[1])
// console.log(students[2])

// for(let i=0;i<students.length;i++){
//     console.log(students[i].name + " " + students[i].age)
// }

//foreach


//stu = students[i]
// students.forEach((stu)=>{
//     //console.log(stu)
//     console.log(stu.name + " " + stu.age)
// }
// )



var studentName = students.map((stu)=>{
  
    return stu.name.toUpperCase()
})
console.log(studentName)



var newStudents = students.map((stu)=>{

    return{
        studentId: stu.id +100,
        name: stu.name.toUpperCase(),
        age: stu.age
    }
})
console.log(newStudents)