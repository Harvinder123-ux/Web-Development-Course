document.title = "javaScript variables"; //setting the document title

//some rules of the variables
//variables name can't be start with the number like 55Box
//variable must start like these _Hello or Box44
//let and const variables are block variables and const values can't changeble
// avr is global variables in javaScript which values is changeble
var x = 9;
var y = 10;

console.log(x + y);
console.log(typeof x);

// var num = prompt("enter the number");
function checkNum(num) {
  if (typeof num === "number") {
    console.log("your sum is :", 5 + num);
  } else {
    console.log("enter the valid number");
  }
}

checkNum(7);

// var input = prompt("enter your number");
// if (!isNaN(input) && input.trim !== "") {
//   var num = Number(input);
//   console.log("your sum is :", 5 + num);
// } else {
//   console.log("enter the valid number");
// }

// let variables in the javaScript
let a = 15;
a = a + 17;
console.log(a);

//const variables in javaScript
// const n = 17
// n = n + 5 - doesn't allowed in js cause n is constant

// console.log(n)

// let vs var
//let example
let b = 17;
{
  let b = 15; // different output
  console.log("block let variable b :", b);
}
console.log("global let variable b :", b); //different output

//var example

var c = 8;
{
  var c = 9; // this will be output for both
  console.log("block var variable c :", c);
}
console.log("global var variable c :", c);

//primitive datatypes in javaScript
let x1 = "Abhi";
let y1 = 23;
let z = 3.99;
let p = null;
let q = true;
let r = undefined;

console.log(x1, y1, z, p, q, r);
console.log(typeof x1, typeof y1, typeof z, typeof p, typeof q, typeof r);



//objects in javaScript - btw object is user defined data types
//object is basically key value pair
let employee = {
    name:"harish",
    age: 23,
    cgpa: 9.1,
    isMale : true,
    salary: 35000
}

console.log(employee)
console.log(employee.name)
console.log(employee.age)
console.log(employee.salary)
console.log(employee.isMale)
employee.code = 5660  //adding other key and value in object
employee.salary = '50crores'
console.log(employee.code);
console.log(employee.salary)