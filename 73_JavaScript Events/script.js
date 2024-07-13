let btn = document.getElementById("btn");
btn.addEventListener("dblclick", () => {
  // alert("the button is clicked");
  document.querySelector(".box").innerHTML =
    "<b>Hey its me Abhi</b> Lets talk about you";
});

//you can check the various mouse events after clicking the below link
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events



//mouse
btn.addEventListener("contextmenu", () => {
  alert("the mouse right button is clicked");
  // document.querySelector(".box").innerHTML = "<b>Hey its me Abhi</b> Lets talk about you"
});


//keyword events 
document.addEventListener("keydown", (e) => {
  console.log(e);
//   alert("the mouse right button is clicked");
  // document.querySelector(".box").innerHTML = "<b>Hey its me Abhi</b> Lets talk about you"
});

