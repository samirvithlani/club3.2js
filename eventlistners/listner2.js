count = 0;
const btn = document.getElementsByClassName('btn');
for(let i=0;i<btn.length;i++){


    btn[i].addEventListener('click',()=>{
        count++;
        console.log(count); // 0
    })

}


