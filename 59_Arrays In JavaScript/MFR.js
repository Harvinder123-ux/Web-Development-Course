let arr = [5, 2, 4, 1, 6, 7, 10];

//inold technique we used to print the new array with the changed conditons like this
// let arr2 = [];
// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   arr2.push(element ** 2);
//   console.log(arr2);
// }

//but we can easily do this using the map function in one line code
arr.map((key) => console.log(key));
//its gives the new array so we have to declare it with some variable so we get changed values
let numSquare = arr.map((key) => key ** 2); //here is one line code

//u can write this like too , can alse take the argument of index and arr and then print it
let newArr = arr.map((e) => {
  return e ** 2;
});
console.log(numSquare);
console.log(newArr);

// //filters is used to filtering the values from the array
// const greaterThan5 = (e) => {
//   return e > 5 ? true : false;
// };

// console.log(arr.filter(greaterThan5)); //no need to add the brackets coz its already in argument declared as function

//also can directly add the greaterThen5 function into arguments like this -- both are doing same thing
console.log(
  arr.filter(
    (greaterThan5 = (e) => {
      return e > 5 ? true : false;
    })
  )
);

//did working - also can check in REPL (browser console)
//reduce function - used to reduce an array to a single value - for example (Adding) sabhi ko add karke ek value dena
let array = [1, 2, 3, 4, 5];
//suppose we have reduce function to add two element a+b
const red = (a, b) => {
  return a + b;
};
console.log(array.reduce(red)); //when we use it on every element in array it produce one value

// array.from = this function is used for create the string array
console.log(Array.from("Abhi"))// output - [ 'A', 'b', 'h', 'i' ]

