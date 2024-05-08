const para = document.getElementById('para');
const parahtml = para.innerHTML;

const myFunction = ()=>{

    const type = document.getElementById('type').value;
    const result = document.getElementById('result');
   
    var typeArray = type.split(''); //['h','i',' ']
    
    var paraArray = parahtml.split('');//['h']
    
    var op=''
    for(let i=0;i<paraArray.length;i++){

        if(paraArray[i] === typeArray[i]){
            
            
            
            op += paraArray[i]
            result.innerHTML = op
            result.style.color = 'green'
            
            
        }
        
        
        
    }
    
    
    
    

}