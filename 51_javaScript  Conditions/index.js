console.log("hello im javaScript code");

//if else (Multi - ladder) coditions in the javaScript using comparison operators
let age = 16;
let grace = 3;
if (age + grace >= 15) {
  console.log("you are eligible for voting");
} else if (age === 10) {
  console.log("wait 8 years more");
} else if (age <= 5) {
  console.log("you are just less then 6");
} else {
  console.log("You are not eligible for voting");
}

//another examples for not equal to which works on the basis of boolean
let guessNum = 5;
if (guessNum != 5) {
  console.log("you choose the wrong number");
} else {
  console.log("yay! choose the right one");
}

//operators in javaScript
//written below are the arithmentic operators
let x = 7;
let y = 10;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);
// console.log(x  y);

//Assignments operators in JavaScript
let a = 10;
let b = 3;
console.log("starting the assignment operators");
a += b;
console.log(a);
a -= b;
console.log(a);
a /= b;
console.log(a);
a *= b;
console.log(a);
a %= b;
console.log(a);

//logical operators - &&, ||, !

let p = 9;
let q = 5;

console.log(p != q);
// and (&&) opeartor return true if both coditions is true
if (p > q && p === q) {
  console.log(true);
} else {
  console.log(false);
}

//OR {||} operator return true if atleast one codition is true
if (p < q || p != q) {
  console.log(true);
} else {
  console.log(false);
}

//comments in javaScript - btw this is single line comment in javaScript
/* this
is the 
multiline 
comment */

//ternery operators in  javaScript
let x1 = 6;
let y1 = 8;

let z1 = x1 > y1 ? x1 - y1 : x1 + y1;
console.log(z1);

/* translate into
if(x1> y1){
   let z1 = x1 - y1
}else {
   let z1 = x1 + y1
} */
