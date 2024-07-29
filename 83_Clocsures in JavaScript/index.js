// What Are Closures?
// A closure is the combination of a function and the lexical environment (scope) within which that function was declared.
// In simpler terms, a closure allows an inner function to access variables from its parent function,
// even when the parent function has completed its execution1.
// Closures are incredibly useful for creating private variables,
// managing state, and implementing certain design patterns.

function outerFunc() {
  let username = "Harvi";
  return function inner() {
    return "Hi " + username;
  };
}

let message = outerFunc();
console.log(message());

//for emuluate private variables
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    getNum: function () {
      return count;
    },
  };
}

let number = createCounter();
number.increment();
number.increment();
number.increment();
number.increment();
console.log(number.getNum());
