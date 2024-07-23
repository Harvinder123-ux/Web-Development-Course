// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 6000);
//   });
// }


// console.log("loading modules");
// console.log("do something else");
// console.log("load data");
// let data = getData();
// data.then((v) => {
//   console.log(v);
//   //now we added this in promise so it will run after the promise resolve
//   console.log("process data");
//   console.log("task 2");
// });

// //so in this by defaulty we are processing the data in end which is bascally not right data should be proccessed before loading
// console.log("process data");

//written above is the another form accessing data as per our needs in



//important thing to learn - settled mean - promise is resolved or rejected and
//resolve mean - promise has been succuessfully fullfilled
//rejected mean- there is some error or something wrong in promise thats why its unfullfiled

//now lets talk about async and await
// async function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(455);
//     }, 6000);
//   });
// }




// async function getData() {
//   let URL = "https://jsonplaceholder.typicode.com/todos/1";
//   let response = await fetch(URL);
//   let data = await response.json();//give the data in js object
// //   let data = await response.text();
// //   console.log(data)
// return data;
// }

// async function main() {
//   console.log("loading modules");
//   console.log("do something else");
//   console.log("load data");
//   let data = await getData();

//   console.log(data);
//   //now we added this in promise so it will run after the promise resolve
//   console.log("process data");
//   console.log("task 2");
// }

// main();



//post request
// Example POST method implementation:
async function postMethod() {
  let x = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  // .then((response) => response.json())
  // .then((json) => console.log(json));
  let data = await x.json();
  console.log(data);
}

postMethod();

///there is some more req - put delete etc
//btw in get - URl all the data will be showned and typically used for access data
//POST - request typically used for submit the data and the data in post methoda is secured
//option req - used for meta
//delete req - for delete the something
//put rq - to put the data
