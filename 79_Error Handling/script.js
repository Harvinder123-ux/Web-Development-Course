let a = prompt("enter ur first number");
let b = prompt("enter ur second number");

//u can write in this way
// if (!isNaN(a) && !isNaN(a) ) {
//   let add = parseInt(a) + parseInt(b);
//   console.log("the sum is ", add);
// } else {
//   add = a + b;
//   console.log("the string concat is ", add);
// }

//u can write in this way
//errors are two type in which one we throwing and another is we handling
if (isNaN(a) || isNaN(a)) {
  throw SyntaxError("Sorry! Please Use the Valid Input"); //this is throwing error
}
let add = parseInt(a) + parseInt(b);
//this is handling error - using try and catch
// try {
//   console.log("the string concat is ", add * x);
// } catch (error) {
//   console.log(error, "define the x? i didnt have one");
//   //there is error object too
//   console.log(error.name);
//   //   console.log(error.type);
//   console.log(error.message);
//   console.log(error.stack);
// } finally {
//   //finally clause - sometimes try..catch construct can have another code and it is finally clause
//   console.log("files are be closed and Database connection being closed");
// }

//finally - shows for both either its try or its catch
//finally clause - sometimes try..catch construct can have another code and it is finally clause
//finally properly used in the function of try and catch as we already know if we return the value then the below code will get ignore but
//finally will show that too

//important why below code ignored - because when we write written its mean now leave it or wapas jao and the function below block of code will not work after this but finally code still show
// let x = 10;
function main() {
  try {
    console.log("the string concat is ", add * x);
    return true; //after this code should be ignored if x is defined but now the finally is there so it also give its message
  } catch (error) {
    console.log(error, "define the x? i didnt have one");
    return false; //no matter the return from the try and catch but after this code will be ignored if it doesn't wrapped up in finally condition
    //there is error object too
  } finally {
    //finally clause - sometimes try..catch construct can have another code and it is finally clause
    console.log("files are be closed and Database connection being closed");
  }
}

let y = main();
