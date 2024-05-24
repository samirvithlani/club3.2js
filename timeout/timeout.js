console.log('timeout.js');
const printUserData = () => {

    console.log('User data');
}

//printUserData();
setTimeout(()=>{
    console.log('Timeout function');
    printUserData();

},3000)