// document.title = "javaScript exercices";

let arr = [2, 5, 7, 8, 9, 10];
console.log(arr);

console.log("the length of an arrray is : ", arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

arr.pop();
console.log(arr);
arr.push("harvi");
console.log(arr);

let obj = {
  name: "sahil",
  age: 25,
  isMale: true,
  cgpa: 7.9,

  giveName: function () {
    return this.name;
  },
};

console.log(obj.giveName());

//write an object in the array and access it index and key value pairs
let array = [
  {
    name: "radhika",
    cgpa: 8.9,
  },
  {
    name: "rishabh",
    cgpa: 8.1,
    movies: ["the dark knight", "the boys", "i want to"],
  },
  {
    name: "krishna",
    cgpa: 9.9,
  },
];

console.log(array[2].name);
console.log(array[2].cgpa);
console.log(array[1].movies[2]);

//tempelate engines
//hbs - handle bars it ensure the minimum the template and is logcless engine that keep
//mustacha
//ejs
//pug


//the easiest ones are the hbs and ebs
//the hard ones is mustache and pug
//where is using the templeate engine u should use the file  (view engine) where creating code
// app.set(view engine, "pathname")
// const express = require("express")
// const app = express();
// const path = require("path");
// const port ="/0000";
// const staticPath = path.join()

for (let index = 0; index < 10; index++) {
    for (let J = 0; J < 5; J++) {
        
        console.log("*")
    }
    // console.log("*")
}
