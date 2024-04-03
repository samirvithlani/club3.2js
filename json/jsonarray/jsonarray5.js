var companies =[
    {
        name: "Google",
        CEO: "Sundar Pichai",
        employees:[
            {
                id:1,
                firstName:"John",
                lastName:"lee",
                salary:30000,
                gender:"female"
            },
            {
                id:2,
                firstName:"ram",
                lastName:"patel",
                salary:40000,
                gender:"male"
            }
        ]
    },
    {
        name: "Microsoft",
        CEO: "Satya Nadella",
        employees:[
            {
                id:1,
                firstName:"Bill",
                lastName:"Gates",
                salary:30000,
                gender:"female"
            },
            {
                id:2,
                firstName:"Steve",
                lastName:"Ballmer",
                salary:40000,
                gender:"female"
            }
        ]
    },
    {
        name: "Facebook",
        CEO: "Mark Zuckerberg",
        employees:[
            {
                id:1,
                firstName:"Mark",
                lastName:"Zuckerberg",
                salary:30000,
                gender:"male"
            },
            {
                id:2,
                firstName:"Sheryl",
                lastName:"Sandberg",
                salary:40000,
                gender:"female"

            }
        ]
    }
]

//var google = companies.find((comp)=>comp.name=="Google").employees.filter((emp)=>emp.salary>30000)

var facebook = companies.find((comp)=>comp.name =="Facebook").employees.filter((emp)=>emp.gender =="female")
console.log(facebook)
//console.log(google)