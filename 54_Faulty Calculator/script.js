// let num1 = prompt("Enter your number1");
// // let opr = prompt("enter your operator")
// let num2 = prompt("Enter your number2")
// num1 = parseInt(num1);
// num2 = parseInt(num2);

// if (isNaN(num1) && isNaN(num2)) {
//     console.log("please enter the valid number")
// }else {

// }
// console.log(num1 + num2);

//faulty calculator
// let a = prompt("enter your first number");
// let b = prompt("enter your second number");
// let opr = prompt("enter the operator");

// let obj = {
//   "+": "-",
//   "-": "+",
//   "**": "/",
//   "/": "*",
//   "*": "**",
// };

// a = parseInt(a);
// b = parseInt(b);
// let random = Math.random();
// console.log(random);

// if (random > 0.1) {
//   console.log(`the result is ${eval(`${a} ${opr} ${b}`)}`);
// } else {
//   opr = obj[opr];
//   //   console.log(`${a} ${opr} ${b}`);
//   console.log(`the result is ${eval(`${a} ${opr} ${b}`)}`);
// }

//without using eval
let a = prompt("enter your first number");
let b = prompt("enter your second number");
let opr = prompt("enter the operator");

let obj = {
  "+": "-",
  "-": "+",
  "**": "/",
  "/": "*",
  "*": "**",
};

a = parseInt(a);
b = parseInt(b);
let random = Math.random();
console.log(random);

if (isNaN(num1) || isNaN(num2)) {
  console.log("Please enter valid numbers");
  return;
}

if (random < 0.1) {
  let result = performOperation(a, b, opr);
  console.log(`the result is ${result}`);
} else {
  opr = obj[opr];
  //   console.log(`${a} ${opr} ${b}`);
  let result = performOperation(a, b, opr);
  console.log(`the result is ${result}`);
}

function performOperation(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "**":
      return a ** b;
    default:
      return "Invalid operator";
  }
}
