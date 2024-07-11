let result = 1;
for (let i = 1; i <= 5; i++) {
  result *= i;
}
console.log(result);

//recursive approach
function recFact(n) {
  if (n === 0) {
    return 1;
  }
  result = n * recFact(n - 1);
  return result;
}

console.log(recFact(5));

// //finding the factorial using the reduce method
// function factorialReduce (num) {
//    if (num === 0) {
//      return 1;
//    }
//    //array from give us array and because we using the length property it will give us the length indexes and then after using the reduce wee will access every element and multiply it
//    return Array.from({length:num}, (...index) => index +1).reduce((acc, val) => acc * val, 1);
// }

// console.log("this one is factorial reduce", factorialReduce(5));



//finding the factorial using the reduce method
function factorialReduce(num) {
  if (num === 0) {
    return 1;
  }

  //array from give us array and because we using the length property it will give us the length indexes and then after using the reduce wee will access every element and multiply it
  //we want our calculationwill start from number 2 thats why num + 1
  let arr = Array.from(Array(num + 1).keys());
  console.log(arr.slice(1)); // will get the batch of values 1 - 5
  //   console.log(arr);
  let newArr = arr.slice(1).reduce((a, b) => {
    return a * b;
  });
  return newArr;
}

console.log("this one is factorial reduce", factorialReduce(5));




//the basic example of upper reduce function is this
let array = [1, 2, 3, 4, 5];
//suppose we have reduce function to add two element a+b
const red = (a, b) => {
  return a * b;
};
console.log(array.reduce(red));




//factoria practice again
function factReduce(number) {
  Array.from(number)
}
