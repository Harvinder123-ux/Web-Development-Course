// basic syntax of the arrow function
// const sayHello = () => {
//   console.log("hello");
// };

// //another ways to write the arrow functions in the javaScript

// // const hello = (name) => console.log("hello" + name);

// // const hello = name => console.log( "hello " + name);

// const hello = (name, greeting) => console.log(greeting + " " + name);

// sayHello();
// hello("abhi", "good evening");



const hello = name => {
  console.log("hello " + name);

  console.log("hi");
};

hello("abhi ", "good Evening");
// differences of arrow and normal function

//using object methods

//three cases of the "this"
//first - in object if u create function then "this" will the object
//second - alone and u create function in functtion then "this "will be refer is global object mean window object

const obj = {
  name: "harvi",
  role: "web developer",
  age: 21,
  salary: "1 lakh",
  //btw this mean the object in which we are

  // show: function () {
  //   console.log(`the name is : ${this.name} and the role is ${this.role}`);
  // },

  //using normal function in setTimeout
  //if we create the the new normal function in the function then its this or it will a window object(global)
  //also if you are using this in the event listenter then the this will be refer to the element that recieve the event

  // //old technique to fix the setTime out problem
  // show: function () {
  //   console.log(this); // refer as the "obj" which is our name of the objcet
  //   let that = this; //yes it can fix the problem cause we hold the "object of this" that outside
  //   setTimeout(function () {
  //     console.log(this); // refer as window object - coz using two function
  //     console.log(`the name is : ${this.name} and the role is ${this.role}`);
  //     console.log(`the name is : ${that.name} and the role is ${that.role}`);
  //   }, 2000);
  // },

  //new techinque - we use the arrow function that automatically take the this(obj) from its lexical parent
  //also known as the  lexical this
  show: function () {
    setTimeout(() => {
      console.log(`the name is : ${this.name} and the role is ${this.role}`);
    }, 2000);
  },
};

// console.log(obj.role, obj.name); //this will work properly
console.log(obj.show()); //this will also work without setTimeout function

//but when we use the timeout in the function then check the output - will show undefined

//1st - the hoisting difference in b/w arrow and normal function -
//normal functions - we can call the function from wherreever in program like before declaring
// sum(7, 5);
// function sum(a, b) {
//   console.log(a + b);
// }

//arrow function - we can't call the function before its decleration(you will get uncaught error)
// const sum = (a, b) => {
//   console.log(a + b);
// };

// sum(7, 5);

//arrow function doesnt have their own arguments objects they inherrit the arguments from the parent scipe
