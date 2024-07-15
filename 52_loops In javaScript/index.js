console.log("tutorials on the loops");

let x = 0;
// console.log(x + 1)
// console.log(x + 2)
// console.log(x + 3)
// console.log(x + 4)

for (let index = 0; index < 100; index++) {
  //   x + index;
  console.log(x + index);
}

// for in loop give use the key of object - for example
let obj = {
  name: "Harvi",
  age: "22",
  role: "programmer",
  company: "infosys",
};

for (const key in obj) {
    const element = obj[key];
  console.log(key, element);
//   console.log(key);
}


//for of is iterator loop for array or string - here the written below example for string
for (const char of "Shreya") {
    console.log(char)
}


//while is the one of most important loop used javaScript as well as in other programming languages too - here is an example
let a = 0;
while (a < 5) {
    console.log(a)
    // a += 1;
    a++;
}

//do while loop - atleast run the code at once
i = 10;
do {
    console.log(i);
    i++;
} while (i < 9);