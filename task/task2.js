var marks1 = parseInt(prompt("Enter marks1"))
var marks2 = parseInt(prompt("Enter marks2"))
var marks3 = parseInt(prompt("Enter marks3"))

var total = marks1 + marks2 + marks3
var avg = total / 3

alert("Total = " + total + " Avg = " + avg)

if(avg >= 70){
    console.log("First Class")
    alert("First Class")
}
else if(avg >= 60){
    console.log("Second Class")
    alert("Second Class")
}
else if(avg >= 50){
    alert("Third Class")
    console.log("Third Class")
}
else{
    console.log("Fail")
    alert("Fail")
}

        