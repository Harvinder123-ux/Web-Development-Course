function message1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Reading your Files");
    }, 2000);
  });
}
function message2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Password Files are detected");
    }, 3000);
  });
}
function message3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Sending all the private files to the server");
    }, 3000);
  });
}
function message4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Cleaning Up");
    }, 3000);
  });
}

async function hackMessage() {
  let para = document.querySelector(".para");

  // para.classList.add("blinking-text")
  para.textContent = "initialing the hacking";

  let dots = document.createElement("span");
  dots.innerHTML = "...";
  dots.classList.add("blinking-text");
  para.appendChild(dots);
  console.log("initialing the hacking");

  try {
    const result1 = await message1();
    para.innerHTML += "</br>" + result1;
    para.appendChild(dots);
    console.log(result1);

    const result2 = await message2();
    para.innerHTML += "</br>" + result2;
    para.appendChild(dots);
    console.log(result2);

    const result3 = await message3();
    para.innerHTML += "</br>" + result3;
    para.appendChild(dots);
    console.log(result3);

    const result4 = await message4();
    para.innerHTML += "</br>" + result4;
    para.appendChild(dots);
    console.log(result4);


  } catch (error) {
    console.log(error);
  }
}

hackMessage();
