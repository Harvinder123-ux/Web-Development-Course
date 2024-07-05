console.log("this is the string tutorial");
let a = "Harvi";
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])

console.log(a.length);


let real_name = "shrena";
let friend = "shashank";

// console.log("His real Name is : " +  real_name + " And his Friend name is : " + friend);
//how to use tempelate literal in javaScript
console.log(`His real Name is : ${real_name} And his Friend name is : ${friend}`);


//escape sequeuce character - suppose we want to write mank"irat but with this syntax "man"kirat" - without using tempelate letter then we use it
let x = "man\"kirat"
console.log(x)

//here is some other characters like backslash \n which is used for starting the new line - also check for others


//string methods and properties
let str = "ramRitira";
console.log(str.toUpperCase()); //these are the functions thats why we declare them using brackets
console.log(str.toLowerCase());
console.log(str.length) //is the property
console.log(str.slice(0, 3))
console.log(str.slice(3, 7))
console.log(str.slice(1))

console.log(str.replace("ra", "sha")) //if there is two same ocurences then the firstt one will change
console.log(str.concat(real_name));
console.log(str.concat(real_name, "ram", "siya", "ram"));
console.log(str.charAt(3));
//on more things strings are the mutable means doesnt change the orignal one just give the new or we can say duplicate string
//here is prove all after making these changes our orignal string will remain same
console.log(str)

//check the others vavrious methods of string using the browser repel or documentation of mozilla 
// here is the link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

