//printing the multipication table using the prompt
// let num = prompt("Enter the number for multipication");
// let result = 10;
// for (let i = 1; i <= result; i++) {
//   console.log(`${num} * ${i} = ${num * i}`);
// }

//printing the paramid shape
let rows = 5;
for (let i = 1; i <= rows; i++) {
  for (let space = 0; space < rows - i; space++) {
    document.write(" &nbsp ");
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    document.write("*");
  }
  document.write("<br />");
}

//finding the odd and even
let odd = [];
let even = [];
let sumOdd = 0;
let sumEven = 0;
function findODD(size) {
  for (let index = 1; index <= size; index++) {
    if (index % 2 !== 0) {
      // console.log(`the odd number: ${index}`);
      sumOdd = sumOdd + index;
      odd.push(index);
    } else {
      // console.log(`the even number: ${index}`);
      sumEven = sumEven + index;
      even.push(index);
    }
  }
  console.log(`The odd Numbers in the: ${odd}`)
  console.log(`The even Numbers in the: ${even}`)
  console.log(`The sum of all even numbers is : ${sumOdd}`);
  console.log(`The sum of all even numbers is : ${sumEven}`);
}

findODD(10);

//two way to add the image in the html
//onet is the relatibe and second is absolute
