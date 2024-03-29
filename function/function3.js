// function outer() {
//   console.log("I am outer function");

//   function inner() {
//     console.log("I am inner function");
//   }

//   inner();
// }

// outer();
// //inner(); // ReferenceError: inner is not defined



// function outer() {
//     console.log("I am outer function");
    
//     function inner(name) {
//       console.log("I am inner function");

//       return `Hello ${name}`;
//       //return "Hello" + name;
//     }
  
//     var ans = inner("raj");
//     console.log("....",ans);
//   }
  
//   outer();
  //inner(); // ReferenceError: inner is not defined


  function outer() {
    console.log("I am outer function");
    
    function inner(name) {
      console.log("I am inner function");

      return `Hello ${name}`;
      //return "Hello" + name;
    }
  
    return inner("amit");
    // var ans = inner("raj");
    // console.log("....",ans);
  }
  
  var ans = outer();
  console.log("....",ans);
  