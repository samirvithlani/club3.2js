const para = document.getElementById('para');
const parahtml = para.innerHTML;
var correctCount = 0;
var count =0;
var paraArray = parahtml.split('');//['h']
console
const myFunction = () => {
    
    if(correctCount === 0){
        var start = new Date().getTime();
        console.log(start);
    }

    const type = document.getElementById('type').value;
    const result = document.getElementById('result');

    var typeArray = type.split(''); //['h','i',' ']
    

    var op = '';
    for (let i = 0; i < paraArray.length; i++) {
        
        if (paraArray[i] === type[i]) {
            op += '<span style="color: green;">' + paraArray[i] + '</span>';
            correctCount++;    
            
        }
        
        
    }
    console.log(correctCount);
   
    //result.innerHTML = op;
    //para.innerHTML = op;
    result.innerHTML = op;
    
    if (parahtml.length) {
        console.log(start)
        let end = new Date().getTime();
        console.log(end);
        let time = (end - start)/1000;
        console.log(time);
        result.innerHTML = "You have completed the task in " + time + " seconds";
    }
}

// Assuming you have an event listener to call myFunction when input changes
