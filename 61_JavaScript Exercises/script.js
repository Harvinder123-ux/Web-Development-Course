document.title = "javaScript Exercises";

// Print Odd Numbers:

// function printODD(size) {
//   for (let index = 0; index < size; index++) {
//     // const element = size[index];
//     if (index % 2 !== 0) {
//       console.log(index);
//     }
//   }
// }

// printODD(100);

// Sum of Array: - using reduce function
let arr = [1, 2, 3, 4, 5];
// console.log(
//   arr.reduce(
//     (red = (a, b) => {
//       return a + b;
//     })
//   )
// );

//using forof
let sum = 0;
for (const num of arr) {
  sum += num;
}
console.log(sum);

// using for each
let sum1 = 0;
arr.forEach((element) => {
  sum1 += element;
});
console.log(sum1);

// using classic loop
let element = 0;
for (let index = 0; index < arr.length; index++) {
  element += arr[index];
}
console.log(element);

//reverse the string
let str = "RadheKrishna";
//like dynamic model in dsa - first break the string and then reverese it then join it again
console.log(str.split("").reverse().join(""));
// console.log(str.reverse());

// //find the maximum number of array
// //understand the last two you will already understand this one
// // using reduce
console.log(arr.reduce((max, curr) => (curr > max ? curr : max), arr[0]));

// //using classic loop
let maxVal = arr[0];
for (let index = 1; index < arr.length; index++) {
  let element = arr[index];
  if (element > maxVal) {
    maxVal = element;
  }
}
console.log("will work", maxVal);

//using foreach
let maximum = arr[0];
arr.forEach((e) => {
  if (e > maximum) {
    maximum = e;
    return maximum;
  }
});

console.log(maximum);

//finding the target value
let A = [1, 4, 5, 6, 8, 10];
let n = 6;
let key = 8;

const binarySearch = (A, size, key) => {
  let low = 0;
  let high = size - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (A[mid] === key) {
      return mid;
    } else if (A[mid] < key) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

let result = binarySearch(A, n, key);
if (result !== -1) {
  console.log(`the ${key} founded in the array at ${result}`);
} else {
  console.log(`the ${key}isn't founded in the array at ${result}`);
}

//fizz buzz
let size = 100;
for (let index = 1; index <= size; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log("fizzBuzz");
  } else if (index % 3 === 0) {
    console.log("fizz");
  } else if (index % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(index);
  }
}

//find the longest word
function findLongWord(str) {
  let words = str.split(" ");
  let longest = "";

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

console.log(findLongWord("The quick brown fox jumps over the lazy dog"));

//fibonacci series
let numbers = 10;
let count = 0;
let num1 = 0;
let num2 = 1;

console.log(num1);//print the first number of fibonacci series
console.log(num2);//print the second number of fibonacci series
while (count < numbers - 2) {
  let nth = num1 + num2; //pehle toh num1 + num2 ko add kardo
  num1 = num2; //abhi num1 ko num2 ki index par le jao

  num2 = nth; //and num2 ko jo new add number hai uski index par lejao kyunko abhi un dono ko add karna h

  //                               |   |
  //So, the sequence begins: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
  console.log(nth);
  count += 1;
}


//
