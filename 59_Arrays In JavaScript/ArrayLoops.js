let arr = [5, 2, 4, 1, 6, 7, 10];

//this is the classic loop
// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   console.log(element);
// }

//this is modern JS loop foreach
// arr.forEach((value, index, array) => {
//   console.log(value, index, array);
// });

// arr.forEach((e) => {
//   console.log(e);
// });

// console.log("after the multipication by 2");
// arr.forEach((e) => {
//   e = e * 2;
//   console.log(e);
// });

//takes the key and value pair from object
//if statement - if there alreay built in property in object then not take it just give the prop thats we create
let obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log(key, element)
  }
}

for (const iterator of arr) {
    console.log(iterator);
}
