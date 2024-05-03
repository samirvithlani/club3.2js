const button= document.getElementById('btn');
//console.log(button);
// button.addEventListener('click',function(){
//     console.log('You clicked me');
// })

button.addEventListener('click',()=>{
    //console.log('You clicked me');
    button.style.backgroundColor='blue';
})
button.addEventListener('mouseover',()=>{
    button.style.backgroundColor='red';
})
button.addEventListener('mouseout',()=>{
    button.style.backgroundColor='green';
})
button.addEventListener('dblclick',()=>{
    button.style.backgroundColor='yellow';
})