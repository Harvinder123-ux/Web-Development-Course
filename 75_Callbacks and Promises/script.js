setTimeout(() => {
  console.log("its under the set time out");
}, 3000);

console.log("hello world");
console.log("its harvinder");

//callback function - is that function which passed to the another funcion as an argument,
// which is then invoked inside the outer function to compelete the execution

const callback = (arg) => {
  console.log(arg);
};
const loadScript = (src, callback) => {
  let script = document.createElement("script");
  script.src = src;
  script.onload = callback("Shiv");
  document.body.appendChild(script);
};

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);

//in js callbacks are those function that are passed to the another function as an argument to execute late also when so many callback functions are used for one functin called callback hell
//this wrtten below the basic example of callback function
// function greeting(name) {
//   console.log("Hello " + name);
// }

// function processUserInput(callback) {
//   const name = prompt("Please enter your name.");
//   callback(name);
// }

// // Example usage
// processUserInput(greeting);

function myFun() {
  console.log("another function ");
}

// Define the callback function that performs the sum operation
function sum(num, myFun) {
  // Convert the input to an integer
  num = parseInt(num);
  // Log the result of adding 5 to the input value
  console.log("The sum of your value with 5: ", num + 5);
  myFun();
}



// Define the function that will process the sum with a callback
function processSum(callback, myFun) {
  // Prompt the user to enter a value
  let add = prompt("Enter your value to add with five");
  // Call the callback function with the user's input
  callback(add, myFun);
}

// Call the processSum function and pass the sum function as a callback
processSum(sum, myFun);




//promises is the solution for the callback hell 
//promises is the promises for the code execution
//promises are a fundamental concept in javaScript that allows you to handle asynchronus operatins, such as network request or database queries
//in a more manageble and efficient way
//typically promises have three states
//1 pending : initial state, neither fulfilled nor rejected
//2 fullfilled : sucessfull operation, the promis is resolve witha value
//3 - rejected : failed operation , the promise is rejected with a reason (error)