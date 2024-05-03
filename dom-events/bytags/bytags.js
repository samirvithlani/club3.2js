function changeText(){


    var h1 = document.getElementsByTagName("h1")
    for(var i=0;i<h1.length;i++){
        h1[i].innerHTML = 'Hacked...';
        h1[i].style.color = 'red';
        h1[i].style.fontSize = '100px';
    }

}