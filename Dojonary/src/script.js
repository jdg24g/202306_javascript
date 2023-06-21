const loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", () => {
  if (loginBtn.innerText === "Login") {
    loginBtn.innerText = "Logout";
  } else {
    loginBtn.innerText = "Login";
    hideBtn.style.display = "block";
  }
});

const hideBtn = document.getElementById("definition");

hideBtn.addEventListener("click", () => {
  hideBtn.style.display = "none";
});

var contadorElemento = document.getElementById("contador");
var contador = parseInt(contadorElemento.innerHTML);

function masUno() {
  contador++;
  console.log(contador);
  if (contador > 18) {
    contador = 17;
    alert("Ninja was disliked");
  } else {
    alert("Ninja was liked");
  }
  contadorElemento.innerHTML = contador;
}
