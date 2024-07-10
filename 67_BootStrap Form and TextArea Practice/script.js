document.getElementById("checkBox").addEventListener("click", () => {
  let password = document.getElementById("password");
    if (password.type === "password") {
      password.type = "text";
    } else if (password.type === "text") {
      password.type = "password";
    }

//   //using ternary operator
//   const passwordInput = document.getElementById("password")
//   const type =
//     passwordInput.getAttribute("type") === "password" ? "text" : "password";
//   passwordInput.setAttribute("type", type);
});





