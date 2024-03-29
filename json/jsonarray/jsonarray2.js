var countries =[
    {
        name:"India",
        capital:"New Delhi",
        states:[
            {
                name:"Gujarat",
                capital:"Gandhinagar",
                cities:[
                    {
                        name:"Ahmedabad",
                        population:5000000
                    },
                    {
                        name:"Surat",
                        population:3000000
                    }
                ]
            },
            {
                name:"Maharashtra",
                capital:"Mumbai"
            }
        ]
    },
    {
        name:"USA",
        capital:"Washington DC",
        states:[
            {
                name:"California",
                capital:"Sacramento"
            },
            {
                name:"Texas",
                capital:"Austin"
            }
        ]
    }
]

console.log(countries)

var India = countries.find((country)=>country.name=="India")
console.log(India)

var guj = countries.find((country)=>country.name =="India").states.find((state)=>state.name=="Gujarat")
console.log(guj)