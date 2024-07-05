console.log("exercise of functions in js");

// console.log("hello abhi ")
// console.log("hello krishna ")
// console.log("hello radha ")
// console.log("hello sukuna ")

//functions in javascript - a particular block of code that can call multiple times from different part of your program. it perform a specific task and can take arguments (inputs) and return values
function greets(name) {
  console.log("hello " + name + " How u Doin");
  console.log("hello " + name + " you are nice guy");
  console.log("hello " + name + " good looking too");
  console.log("hello " + name + " And last thing We Appriciate Your Work");
}

greets("shreya");

function sumVal(num1, num2) {
  return num1 + num2;
}
console.log("the sum of values is: ", sumVal(7, 10));

//now lets talk about the optional parameters
function sumOptional(a, b, c = 7) {
  return a + b + c;
}

console.log(sumOptional(8, 5));
console.log(sumOptional(5, 5, 5));

//arrow function in js
const funcArrow = (data) => {
  console.log("the is the arrow function", data);
};

funcArrow(5);
