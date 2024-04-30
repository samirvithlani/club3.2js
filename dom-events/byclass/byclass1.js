function changeColor(){


    var box = document.getElementsByClassName('box');
    console.log(box)
    //box[0].style.backgroundColor = 'green';

    for(let i=0;i<box.length;i++){
        box[i].style.backgroundColor = 'green';
    }

}