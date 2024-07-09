//written below are the minimalist examples of how we access the element form html using dom manipulation in javaScript by id and class selectors
//class selcector
let boxes = document.getElementsByClassName("box");
// console.log(boxes);
// boxes[0].style.backgroundColor = "blue";
boxes[1].innerText = "itachi uchiha";
boxes[1].style.backgroundColor = "red";
boxes[2].innerText = "Naruto";
boxes[2].style.backgroundColor = "yellow";
boxes[4].style.color = "White";
boxes[4].innerText = "Kakashi";
boxes[4].style.backgroundColor = "green";

//id selector
// let box = document.getElementById("box4"); //id always used for selecting the particular element from the elements
// box.style.backgroundColor = "purple";
// box.style.color = "White";
// box.innerText = "Madara Uchiha";

//it will access or select the first element of same class
//query selector for the class -- it will return the first element that one is eselected but
let clBox = document.querySelector(".box");
clBox.style.backgroundColor = "pink";
clBox.innerText = "Rin/Obito";

//when you say querySelectorAll it returns the element in html collection
// console.log(document.querySelectorAll(".box"));
let allBox = document.querySelectorAll(".box");
//now there u have to use your brain and add the styles on collection coz without that its not going to work directly
//so the thing is we are going to use the for each to select all the element from the collection
allBox.forEach((e) => {
  e.style.backgroundColor = "purple";
  e.style.color = "white";
});

//query selector for id
let idBox = document.querySelector("#box4");
idBox.style.backgroundColor = "purple";
idBox.style.color = "White";
idBox.innerText = "Madara Uchiha";

//tag name
console.log(document.getElementsByTagName("div"));

//matching selctor used for mathching the info
let e = document.getElementsByTagName("div");
console.log(e[4].matches("#box4"))//the only element have id and its box 3 and its matches
console.log(e[3].matches("#box4"))//will return - false


//closest - its look for the near ancestor that matches the given css Selecotor -(kind of find the closest parent of given css selector)
console.log(e[4].closest("#box4")) //it will return the only elment but
console.log(e[3].closest("#box4")) //element 4 have no id#box4 so it will return null - beacuse not either its parent match that css("#box4") and nor its have("#box4")
console.log(e[4].closest(".container")) //it will return the container coz its ancestor(parent) have that css(".container")
console.log(e[4].closest("html")) //it will return the html tag coz its ones of ancestors(parent) have that css("html") and its html tag



//contain - return true if the elementB is inside the elementA
console.log(document.querySelector(".container").contains(e[2]))
//you can also ask for itself and it will return true
// console.log(document.querySelector(".container").contains(e[0]))
console.log(document.querySelector("body").contains(document.querySelector(".container")))