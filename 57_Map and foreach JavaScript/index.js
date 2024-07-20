let arr = [1, 2, 3, 4, 5];
// let doubleSquare = arr.map(index => index*2);
// let addNum = arr.map((index) => index + 2);
// // console.log(doubleSquare);
// console.log(addNum);

arr.forEach((element) => {
  element = element * 2;
  console.log(element);
});


// map Method
// Purpose: Transforms each element in an array and returns a new array.
// Return Value: A new array with the transformed elements.
// Usage: When you need to create a new array based on the transformation of each element in the original array.


// forEach Method
// Purpose: Executes a provided function once for each array element.
// Return Value: undefined. It does not return a new array.
// Usage: When you need to perform side effects (e.g., logging, modifying elements in place) without creating a new array.

