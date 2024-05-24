var count = 0;
var id = setInterval(() => {
      count++;
        console.log("count = ",count);
}, 2000);

console.log("Hello");
setTimeout(() => {
        clearInterval(id);
        console.log("cleared interval");
},10000)
//clear interval

