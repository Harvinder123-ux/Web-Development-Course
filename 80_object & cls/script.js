//object - an object is instance of class, it is concrete entity that has its own set of attributes(data) and methods(functions)
//in objects we store the real world entity and data
// let myObj = {
//   id: 1,
//   userName: "harvi",
//   age: 23,
//   currsalary: "10k",
//   future: "1lakh",
// };

// console.log(myObj);

// //Prototypes - javaScript objects have another special property called prototypes
// // which is either null or refrence of another object

// //we make the prototypes so we can do proto type inheritance like
// let animal = {
//   eat: "food",
// };

// let cat = {
//   work: "sleep",
// };

// cat.__proto__ = animal; //there we are setting the prototype of object
// console.log(cat); //check the prototype - u will get the eat prototype too

//so in other words prototypes is additional special properties of object

//class - a class is a blueprint or a template tat defines the property and behaviour of an object
//now this is the simple example of an class b
// class Animal {
//   constructor() {
//     console.log("the new object has been created");
//   }

//   eat() {
//     console.log("Eating the food");
//   }
//   sleeping() {
//     console.log("sleeping ");
//   }
// }

// let a = new Animal;
// console.log(a)
// a.sleeping();

//now lets talk about to set the constructor
//constructor (definition)- A constructer is the special method in a class that is used to intialize objects when they are created.
//it is call when an object intantiated, and it sets the intial state of the object by assigning  the value to its properties
// class Animal {
//   constructor(name, type) {
//     (this.name = name),
//       (this.type = type),
//       console.log("the new object has been created");
//   }

//   eat() {
//     console.log("Eating the food");
//   }
//   sleeping() {
//     console.log("sleeping ");
//   }
// }

// let a = new Animal("cat", "pet");
// console.log(a);
// // a.sleeping();

// let b = new Animal("dog", "petbull");
// console.log(b);
// a.sleeping();

class Animal {
  constructor(name, type) {
    (this.name = name),
      (this.type = type)
    //   console.log("the new object has been created");
  }

  eat() {
    console.log("Eating the food");
  }
  sleeping() {
    console.log("sleeping ");
  }
}

class Lion extends Animal {
  constructor(name, type) {
    //btw we already have constructor in the parent class so if we add new constructor in child then we have to use the super() then we can use the property of child constructor
    super(name, type); //now this name will set for the upper class construcor
  }
  //method overiding - if we create our own method of eat, then it will not taken from the Parent(Animal) class, this is what we called method overriding
  eat() {
    // but if i write the super keyword then for both methods will run for lion ones is lion and another is animal 
    super.eat();
    console.log("The lion Eats Meat");
  }
}
let c = new Animal("cat", "pet");
console.log(c);
c.eat();

let k = new Lion("Sher", "hunter");
console.log(k);
k.eat();


//super keywoord - when we want to run and access the method of super(parent) class we use the  super method


// instance operators
//instance(object) of Class
// k instanceof Animal
// true
// lion instanceof Animal //both are classes so error
// VM5873:1 Uncaught ReferenceError: lion is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM5873:1Understand this error
// Lion instanceof Animal
// false
// k instanceof Lion
// true
// c instanceof Lion
// false