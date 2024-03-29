//callback functions
//js is following single threaded model

function toBeCalled(){

    console.log("I am to be called");
}

function toBeCalled2(){
    
        console.log("I am to be called2");
}

function test(a){

    console.log("test function called");
    console.log("a is ",a);
    a();
    
}

// test(10);
// test("hello");
// test([1,2,3,4,5]);
// test(true)
test(toBeCalled);
test(toBeCalled2);


