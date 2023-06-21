const loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", () => {
  if (loginBtn.innerText === "Login") {
    loginBtn.innerText = "Logout";
  } else {
    loginBtn.innerText = "Login";
  }
});
