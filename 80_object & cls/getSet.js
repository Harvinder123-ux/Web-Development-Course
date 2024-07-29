class User {
  constructor(name) {
    this._name = ""; // Initialize an internal property
    this.name = name; // Invokes the setter
  }

  get name() {
    return this._name; // Access the internal property
  }

  set name(value) {
    if (value.length < 4) {
      // Check length instead of value itself
      console.log("The name is too short");
      return;
    }
    this._name = value; // Set the internal property
  }
}

let user = new User("Doe1");
console.log(user.name); // Output: Doe

user.name = "john2";
console.log(user.name);



//other get and set example
class Person {
  constructor(age) {
    this._age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (value < 0) {
      console.log("Age cannot be negative");
      return;
    }
    this._age = value;
  }
}

let person = new Person(25);
console.log(person.age); // Output: 25
person.age = -5; // Output: Age cannot be negative
console.log(person.age); // Output: 25
