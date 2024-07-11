document.title = "DOM Practice";

// let firstBox = document.getElementsByClassName("box");
// firstBox[0].style.backgroundColor = "red";
// firstBox[0].style.color = "yellow";
// firstBox[1].style.backgroundColor = "orange";
// firstBox[3].style.backgroundColor = "green";
// firstBox[3].style.color = "pink";
// firstBox[4].style.backgroundColor = "pink";
// firstBox[4].style.color = "red";
// firstBox[0].style.backgroundColor = "red";


// let qBox = document.querySelector(".box");
// box.style.color = "white";

// let spBox = document.getElementById("specialBox");
// spBox.style.backgroundColor = "purple";
// spBox.style.color = "white";

// function getRandColor() {
//   //math.ceil give us the integer value if the value is 4.2 it will return upper 5
//   //in this we are using the formula a+ r(b-a) in this (0 + math.random()*255); for get the random number
//   //in written below we accessing the random number from 0 to 255 value
//   let val1 = Math.ceil(0 + Math.random() * 255);
//   let val2 = Math.ceil(0 + Math.random() * 255);
//   let val3 = Math.ceil(0 + Math.random() * 255);
//   return `rgb(${val1}, ${val2}, ${val3})`;
// }

function getRandColor() {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}
let boxes = document.querySelectorAll(".box");
boxes.forEach((e) => {
  e.style.backgroundColor = getRandColor();
  e.style.color = getRandColor();
});
