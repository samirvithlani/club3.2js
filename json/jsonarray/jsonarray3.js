var students =[
    {
        id:1,
        name:"kunal",
        age:23,
        gender:"male",
        courses:["c","c++"]
    },
    {
        id:2,
        name:"ram",
        age:25,
        gender:"male",
        courses:["c","c++","java"]
    },
    {
        id:3,
        name:"sita",
        age:22,
        gender:"female",
        courses:["c","c++","python"]
    },
    {
        id:4,
        name:"seema",
        age:28,
        gender:"female",
        courses:["c","c++","java","python"]

    }
]
//


var femaleStudents = students.filter((stu)=>{

    //1 --> male =="false"
    //2 -->
    //3 -->female =="female" true
    return stu.gender == "female"
})
console.log(femaleStudents)

var agefil = students.filter((stu)=>{

    return stu.age >= 25
})

console.log(agefil)

var javastu = students.filter((stu)=>{

    return stu.courses.includes("java")
})
console.log(javastu)

var javapyth = students.filter((stu)=>{

    return stu.courses.includes("java") && stu.courses.includes("python")
})



console.log(javapyth)