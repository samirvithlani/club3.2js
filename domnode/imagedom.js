const changeImage = () => {


    const image = document.getElementById('image');
    const imageSrc = image.src; //url

    const box1 = document.getElementById('one');
    box1.removeChild(image);

    const box2 = document.getElementById('two');
    box2.appendChild(image);
}