var data = [1, 2, 3, 4, 5, 6];
const box = document.getElementById('box');
const button = document.getElementById('btn');
const removeButton = document.getElementById('removeBtn');



button.addEventListener('click', function() {
    if (data.length > 0) {
        const lastElement = data.pop(); // Remove and get the last element of the array
        const p = document.createElement('p'); // Create a new paragraph element
        p.innerHTML = lastElement; // Set the innerHTML of the paragraph to the last element
        box.appendChild(p); // Append the paragraph to the box
    }
    else{
        alert('No more data to display');
    }
});

removeButton.addEventListener('click', function() {
    const lastChild = box.lastElementChild; 
    console.log(lastChild);
    if (lastChild) {
        const removedValue = parseInt(lastChild.textContent); 
        data.push(removedValue); 
        box.removeChild(lastChild); 
    }
    else{
        alert('No more data to remove');
    }
});
