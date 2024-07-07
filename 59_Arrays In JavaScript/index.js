//an array is contigeous memory location where we store the multiple types of data - also array is mutable but string not  we can change the orignal array
// the basic syntx of array in javaScript is
let a = ["mango", "grapes", 1, 54, "shreya"];
console.log(a);
console.log(typeof a);
console.log(a.length);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
a[4] = "abhi";
console.log(a[4]);
console.log(a); //this is the prove array is mutable

//if we do this with string then its not change here is example
// let b = "harvi";
// b[0] = "k";
// console.log(b); //output - harvi (so its not changeble)

//you can also covert the array into the string - this is how
console.log(a.toString());

//other methods
console.log(a.join(" and ")); //commas will replaced by the and

//pop - remove the last element
a.pop();
console.log(a);

//push - add the element at the last in array
a.push("Radhe");
console.log(a);

//shift - remove the first element from an array - brother of pop
a.shift();
console.log(a);

//unshift - add the first element in an array - brother of push
a.unshift("litchi");
console.log(a);

//delete - used for delete the element the one thing is to remind is important the length of array will remain same coz memory still remain allocated but the element is deleted
// delete a[3];
// console.log(a);
// console.log(a.length); //5

//concat method - using for to concat the arrays - but it dosen't change the existing array return the new array
let b = [11, 2, 9, 14, 5];
let c = ["pain", "hashirama", "madara", "itachi", "obito"];
console.log(a.concat(b, c));

//sort method - using to sort the array
// let b = [11, 2, 9, 14, 5];

// console.log(b.sort((x, y) => x - y));
// let b = [11, 2, 9, 14, 5];

// Sorting the array numerically
// b.sort((x, b) => x - b);

// console.log(b); // Output: [2, 5, 9, 11, 14]



//splice - can be use to add and remove the numbers from array
// b.splice(0, 2);
console.log(b)


//slice - function used to slices out the piece from an array - it creates the new array

b.slice(0,2);
console.log(b)

// let b = [11, 2, 9, 14, 5];
// undefined
// b.slice(2)
// (3) [9, 14, 5]
// console.log(b)
// [11, 2, 9, 14, 5]length: 5[[Prototype]]: Array(0)
// undefined