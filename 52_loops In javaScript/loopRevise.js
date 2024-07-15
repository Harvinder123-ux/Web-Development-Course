// loops work on threee things
// first - initializition
// condtion - what the condition
// inc/dec - increment and decrement the condition till condition match

// let size = 100;
// for (let i = 1; i < 100; i++) {
//   if (i % 2 !== 0) {
//     document.write(i);
//   }
// }

// let x = 0;
// while (x <= 20) {
//   document.write(x);
//   x++;
// }

// let a = 11;
// do {
//   document.write(a);
//   a++;
// } while (a < 10);

// for (let i = 1; i < 5; i++) {
//   for (let j = 1; j < i + 1; j++) {
//     document.write("  *");
//   }
//   document.write("<br/>");
// }

// for (let i = 5; i > 1; i--) {
//   for (let j = i - 1; j > 1; j--) {
//     document.write("  *");
//   }
//   document.write("<br/>");
// }

// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//   document.write("");

//   for (let space = 1; space <= rows - i; space++) {
//     document.write( " &nbsp");
//   }

//   for (let j = 1; j <= 2 * i - 1; j++) {
//     document.write("*");
//   }
//   document.write("<br/>");
// }

let rows = 5;
for (let i = 0; i < rows; i++) {
  // document.write("");
  for (let space = 0; space <= rows - i; space++) {
    document.write(" &nbsp ");
  }
  for (let j = 0; j < 2 * i - 1; j++) {
    document.write("*");
  }
  document.write("<br/>")
}





//space loop working
// This loop adds spaces to center-align the pyramid. Here's how it works for each row:

// First Row (i = 1):

// rows - i = 5 - 1 = 4
// It runs from space = 0 to space <= 4, printing 5 spaces.
// Second Row (i = 2):

// rows - i = 5 - 2 = 3
// It runs from space = 0 to space <= 3, printing 4 spaces.
// Third Row (i = 3):

// rows - i = 5 - 3 = 2
// It runs from space = 0 to space <= 2, printing 3 spaces.
// Fourth Row (i = 4):

// rows - i = 5 - 4 = 1
// It runs from space = 0 to space <= 1, printing 2 spaces.
// Fifth Row (i = 5):

// rows - i = 5 - 5 = 0
// It runs from space = 0 to space <= 0, printing 1 space.