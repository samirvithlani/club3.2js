const para = document.getElementById('para');
const parahtml = para.innerHTML;

const myFunction = () => {
    const type = document.getElementById('type').value;
    const result = document.getElementById('result');

    var typeArray = type.split(' '); //['h','i',' ']
    var paraArray = parahtml.split(' ');//['h']

    var op = '';
    for (let i = 0; i < paraArray.length; i++) {
        if (paraArray[i] === typeArray[i]) {
            op += '<span style="color: green;">' + paraArray[i] + '</span>';
            
        }
        
        
    }
   
    //result.innerHTML = op;
    //para.innerHTML = op;
    result.innerHTML = op;
}

// Assuming you have an event listener to call myFunction when input changes
