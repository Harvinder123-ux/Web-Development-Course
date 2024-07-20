// let prom = new Promise((resolve, reject) => {
//     console.log("loading ur data");
//   setTimeout(() => {
//     console.log("yes i'm done");
//     resolve("harvi");
//   }, 3000);
// });

// prom
//   .then((e) => {
//     console.log(e);
//   })
//   .catch((error) => console.log(error));
// let prom = new Promise((resolve, reject) => {
//   let a = Math.random();
//   if (a < 0.5) {
//     reject("random number is lesser than ur expectations");
//   } else {
//     console.log("your number is greater! you win loading...");
//     setTimeout(() => {
//       console.log("yes i'm done😉");
//       resolve("Brand new Ferrari");
//     }, 5000);
//   }
// });

// prom
//   .then((e) => {
//     console.log(e);
//   })
//   .catch((error) => console.log(error));

//promise finally used when we want to close all the files we openend
//or generally used for cleanups

//promise chaining

// Function that returns a Promise
// function asyncTask1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Task 1 completed");
//     }, 1000);
//   });
// }

// function asyncTask2(message) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${message}, Task 2 completed`);
//     }, 1000);
//   });
// }

// function asyncTask3(message) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${message}, Task 3 completed`);
//     }, 1000);
//   });
// }

// Chaining Promises
// You can chain multiple .then() methods to handle sequences of asynchronous operations:
// asyncTask1()
//   .then((result) => {
//     console.log(result);
//     return asyncTask2(result);
//   })
//   .then((result) => {
//     console.log(result);
//     return asyncTask3(result);
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

//attach handlers - we can attach multiple handlers to the one promise and they can't pass the resluts betweeen and runs independently
// let promise = new Promise((resolve, reject) => {
//   resolve("Step 1 complete.");
// });

// promise
//   .then((message) => {
//     console.log(message); // Output: Step 1 complete.
//     return "Step 2 complete.";
//   })
//   .then((message) => {
//     console.log(message); // Output: Step 2 complete.
//     return "Step 3 complete.";
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("All steps are done."); // Output: All steps are done.
//   });

//promise api
//promis.all - waits the all promises to be resolve and then return result in array, if any fails it will return the error & all others results are ignored
let promise1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("random number is lesser than ur expectations");
  } else {
    console.log("your number is greater! you win loading...");
    setTimeout(() => {
      console.log("Brand new Ferrari ");
      resolve("step 1 is completed");
    }, 5000);
  }
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("step 2 is completed");
  }, 2000);
});
let promise3 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("random number is lesser than ur expectations");
  } else {
    console.log("your number is greater! you win loading...");
    setTimeout(() => {
      console.log("Brand new mesrati");
      resolve("step 3 is completed");
    }, 1000);
  }
});
let promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("step 4 is completed");
  }, 4000);
});

// Promise.all([promise1, promise2, promise3, promise4])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((error) => {
//     console.log(error);
//   });



//promise settled - wait for all the promises to be settled and return results as an array of output with status and value
//in other words it says atleasts the promises will execute no matters its resolves or rejected but it return status and value/reason
// Promise.allSettled([promise1, promise2, promise3, promise4])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((error) => {
//     console.log(error);
//   });


  //promise race - wait for the first promise to be settled and its result/errors become the outcome
  Promise.race([promise1, promise2, promise3, promise4])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.log(error);
  });


  //promise any - wait for the first promise to be fullfilled (& not rejected) and its results become outcome, it throws the aggregate error if all promises are rejected
  //promise.resolve(value) - makes a resolve promise with a given value
  //promise.reject(error) - makes a rejected promise with a given error