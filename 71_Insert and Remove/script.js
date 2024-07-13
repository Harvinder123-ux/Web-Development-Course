// let box = document.querySelector(".container");

// console.log(box.innerHTML);
// console.log(box.innerText);

// USING REPL
// document.querySelector(".container")
// <div class=​"container">​…​</div>​
// document.querySelector(".container").innerHTML
// '\n        <div class="box">\n            Hello I am the box\n        </div>\n    '
// document.querySelector(".container").innerText
// 'Hello I am the box'
// document.querySelector(".box").innerText
// 'Hello I am the box'

//in innerHTML we will get the inner html for example int his container box
//but in outer html we will get the outer container as well as the box too
// document.querySelector(".container").outerHTML
// '<div class="container">\n        <div class="box">\n            Hello I am the box\n        </div>\n    </div>'

// document.querySelector(".container").tag
// undefined

// //tag name only for the elements
// document.querySelector(".container").tagName
// 'DIV'

// //node name applicable on all tags, comments, textNode etc
// document.querySelector(".container").nodeName
// 'DIV'

// document.querySelector(".container").textContent
// '\n        \n            Hello I am the box\n        \n    '
// document.querySelector(".container").hidden
// false
// document.querySelector(".container").hidden = true
// true

// document.querySelector(".box").innerHTML = "hello its me abhi"
// 'hello its me abhi'
// document.querySelector(".box").innerText = "hello its me messi"
// 'hello its me messi'
// document.querySelector(".container").innerHTML = "<div class = 'box'> its me second box </div>"
// "<div class = 'box'> its me second box </div>"
// document.createElement("div")
// <div>​</div>​

//atribute methods
// document.querySelector(".box").hasAttribute("style")
// true
// document.querySelector(".container").hasAttribute("style")
// false
// document.querySelector(".container").setAttribute("style", "background-color: yellow")
// undefined
// document.querySelector(".box").setAttribute("style", "background-color: yellow")
// undefined

// document.querySelector(".box").attributes
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}
// document.querySelector(".box").removeAttribute("style")
// undefined

//use this mode to change or manipulate any website for temporary!
// document.designMode = "on"
// 'on'

//dataset - just for knowing who create the data and cocepts
// document.querySelector('.box').dataset
// DOMStringMap {createdby: 'Harvi', conceptby: 'abhi'}conceptby: "abhi"createdby: "Harvi"[[Prototype]]: DOMStringMap




//now lets talk about the main thing that we have to understan how to insert an element
//so here is the steps written below
//first create the element you want to insert

// let div = document.createElement("div");
// //2 - add the innerHTML or inner text in it
// div.innerHTML = "This element is created by the <b>Harvinder</b>";
// //step 3 - optional - you can also set the attribute  in it like class
// div.setAttribute = ("class", "box");
// //step 4 - access the element where to insert elememt and using append method insert it
// document.querySelector(".container").appendChild(div); //when we use the append then the inserted element will show in the end

//these types some more functionn are - prepend , before, after, replacewith

//before mean the container we select before its
//after the container
//inside the container first
//inside the container end



//using the insertAdjacent HTML and Text methods
let container = document.querySelector(".container");
//we can add insert HTML in 4 ways -
//beforebegin -insert html immediately before the element begin
//afterbegin -insert html immediately after the element begin
//beforeend-insert html immediately before the element end
//afterend -insert html immediately before the element end

container.insertAdjacentHTML("afterend", "<b>hey its me harvinder </b>")//inspect the elments it will show you inserted after the container end
container.insertAdjacentHTML("beforeEnd", "<b>hey its me hinata </b>")//inspect the elments it will show you inserted just befor the container end
container.insertAdjacentHTML("afterbegin", "<b>hey its me naruto</b>")//inspect the elments it will show you inserted just after the container begin
container.insertAdjacentHTML("beforebegin", "<b>hey its me itachi</b>")//inspect the elments it will show you inserted just before the container begin



// //node removal - using REPL
// document.querySelector(".box").remove()
// undefined
// document.querySelector(".container").remove()
// undefined
// document.querySelector(".container").classList
// DOMTokenList(3) ['container', 'd-flex', 'mt-5', value: 'container d-flex mt-5']
// document.querySelector(".container").className
// 'container d-flex mt-5'
// document.querySelector(".container").classList.add("justify-content-center")
// undefined
// document.querySelector(".container").classList.remove("mt-5")
// undefined


//using togling add and remove the class
// document.querySelector(".container").classList.toggle("justify-content-center")
// true
// document.querySelector(".container").classList.toggle("justify-content-center")
// false
// document.querySelector(".container").classList.toggle("justify-content-center")
// true
// document.querySelector(".container").classList.toggle("justify-content-center")
// false
// document.querySelector(".container").classList.toggle("justify-content-center")
// true
// document.querySelector(".container").classList.toggle("justify-content-center")
// false