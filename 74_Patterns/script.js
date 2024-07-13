//square
for (let index = 0; index < 5; index++) {
  document.write(" ");
  for (let j = 0; j < 5; j++) {
    document.write("*");
  }
  document.write("</br>");
}

// paramid;
let rows = 5;
for (let i = 0; i < rows; i++) {
  for (let spaces = 0; spaces < rows - i - 1; spaces++) {
    document.write("&nbsp;&nbsp;");
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    document.write("*");
  }
  document.write("</br>");
}

//down - paramid
// let rwDown = 5;
for (let i = rows-2; i >= 0; i--) {
  for (let spaces = rows - i - 1; spaces > 0; spaces--) {
    document.write("&nbsp;&nbsp;");
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    document.write("*");
  }
  document.write("</br>");
}

//diamond
// let rows = 5;

// // Upper half of the diamond
// for (let i = 0; i < rows; i++) {
//   for (let spaces = 0; spaces < rows - i - 1; spaces++) {
//     document.write("&nbsp;&nbsp;");
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// // Lower half of the diamond
// for (let i = rows - 2; i >= 0; i--) {
//   for (let spaces = 0; spaces < rows - i - 1; spaces++) {
//     document.write("&nbsp;&nbsp;");
//   }
//   for (let j = 0; j < 2 * i + 1; j++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }
