console.log("hello");

let number = [1, 2, 3, 4, 5];
const doublenum = number.map((num) => num * 2);
console.log(doublenum);

number.forEach((num, index) => {
  console.log(`${index} and ${num}`);
});

let sumOfValues = (num1, num2) => {
  return num1 + num2;
};

console.log(sumOfValues(5, 7));

// let guessVal = prompt("enter the val");


function findOddnumber(size) {
  for (let i = 0; i < size; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

findOddnumber(20);




