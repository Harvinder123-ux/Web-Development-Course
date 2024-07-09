document.title = "DOM - Roots Parents child";

//just an example how to acces the element
let boxes = document.querySelectorAll(".box");
boxes.forEach((e) => {
    e.style.backgroundColor = "yellow";
})
console.log(boxes)

console.log(document.body.childNodes);



//REPL WORK
//NOTE IMPORTANT - breaking the line assumed as text in document object model
//performin in REPL
// document.body.childNodes
// NodeList(5) [text, div.container, text, script, text]
// document.body.childNodes[1]
// <div class=​"container">​…​</div>​
// document.body.childNodes[1].childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// let cont = document.body.childNodes[1]
// undefined
// cont
// <div class=​"container">​…​</div>​
// cont.firstChild
// #text
// cont.lastChild
// #text
// cont.firstElementChild
// <div class=​"box" style=​"background-color:​ yellow;​">​BOX 1​</div>​
// cont.lastElementChild
// <div class=​"box" style=​"background-color:​ yellow;​">​BOX 5​</div>​
// cont.firstElementChild.style.backgroundColor = "green"
// 'green'
// cont.lastElementChild.parentElement
// <div class=​"container">​…​</div>​



// document.body.firstChild
// #text
// document.body.firstChild
// #text
// document.body.firstE
// undefined
// document.body.firstElementChild
// <div class=​"container">​…​</div>​
// document.body.firstElementChild
// <div class=​"container">​…​</div>​
// document.body.firstChild.childNodes
// NodeList []length: 0[[Prototype]]: NodeList
// document.body.firstElementChild.childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]
// document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]
// document.body.firstElementChild.children[3]
// <div class=​"box" style=​"background-color:​ yellow;​">​BOX 4​</div>​
// document.body.firstElementChild.children[3].nextElementSibling
// <div class=​"box" style=​"background-color:​ yellow;​">​BOX 5​</div>​
// document.body.firstElementChild.children[3].previousElementSibling
// <div class=​"box" style=​"background-color:​ yellow;​">​BOX 3​</div>​
//document.body.firstElementChild.children.parent

// document.body.children[1]
// <table>​…​</table>​
// document.body.children[1].rows
// HTMLCollection(2) [tr, tr]