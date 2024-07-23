document.title = "DOM Practices";

function getrandomColor() {
  let val1 = Math.ceil(0 + Math.random() * 255);
  let val2 = Math.ceil(0 + Math.random() * 255);
  let val3 = Math.ceil(0 + Math.random() * 255);

  return `rgb( ${val1}, ${val2}, ${val3})`;
}
let boxes = document.querySelectorAll(".box");
boxes.forEach((e) => {
  console.log(e);
  e.style.backgroundColor = getrandomColor();
  e.style.color = getrandomColor();
});


