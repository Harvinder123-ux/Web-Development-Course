document.title = "DOM - Document Object Model 2"
console.log(document.title)
console.log(document.body)
document.body.style.backgroundColor = "yellow";


//Window is Global Object (you should no need add window in front of you can access the element using just name document and browser name) and here are the some windows object too which is used for both bom and dom and they are
console.log(window.document.body)// will show the document body elements object

//select the specific element from inspect then its consider as $0 and using this u can manipulate with it
// $0
// <div class=​"container">​…​</div>​
// $0.style.backgroundColor = "red";
// 'red'


//click on this link to learn more about the dom
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
let image = document.createElement("img");
document.body.appendChild(image);
image.src = "domTree.png";
console.log(image)