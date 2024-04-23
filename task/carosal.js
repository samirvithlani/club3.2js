

const images = ["../images/images.jpg","../images/download.png","../images/iphone.jpg","../images/14iph.jpg"]
currentIndex =0;

const show = ()=>{
    
    const img = document.getElementById('image');
    //img.src = "./images/download.png"
    //img.src = "./images/"+images[currentIndex];
    img.src = images[currentIndex];

}
const next = ()=>{

    currentIndex++;
    if(currentIndex>=images.length){
        currentIndex=0;
    }
    show();

}
const prev = ()=>{

    currentIndex--;
    //-1
    if(currentIndex<0){
        currentIndex=images.length-1;
        //currentIndex = 4-1 = 3
    }

    show();

}