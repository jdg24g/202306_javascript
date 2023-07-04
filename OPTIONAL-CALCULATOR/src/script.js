const display = document.getElementById("display");
const card = document.querySelector(".card");
const clicksound = new Audio('/assets/click.wav');
const recycle = new Audio('/assets/recycle.mp3');
async function cliki(){
	clicksound.play()
	setTimeout(() => {
    clicksound.pause();
    clicksound.currentTime = 0;
  }, 260);
}
let num1 = "";
let num2 = "";
let op = "";

function press(num) {
  num1 += num;
	cliki();
  display.innerHTML = num1;

}

function setOP(key) {
	cliki();
  op = key;
  num2 = num1;
  num1 = "";
}

function clr() {
	recycle.play()
  num1 = "";
  num2 = "";
  op = "";
  display.innerHTML = "0";
}

function calculate() {
	cliki();
  if (display.innerHTML === "0") {
    alert("No puedes realizar operaciones con 0");
    return;
  }
  let a = parseFloat(num2);
  let a1 = a;
  let b = parseFloat(num1);
  let b1 = b;
  let res = 0;
  switch (op) {
    case "+":
      res = a + b;
      break;
    case "-":
      res = a - b;
      break;
    case "*":
      res = a * b;
      break;
    case "/":
      res = a / b;
      break;
  }
  num1 = res;
  display.innerHTML = res;
  const historial = `${b1} ${op} ${a1} = ${display.innerHTML}`;
  card.style.display = "flex";
  card.innerHTML += `<p class="historial-item">${historial}</p>`;
	console.log(card.childElementCount)
	if(card.childElementCount >5){
		card.removeChild(card.firstChild);
	}
  op = "";
}

function clrHistorial() {
  card.innerHTML = "";	
  clr();
  card.style.display = "none";
}
