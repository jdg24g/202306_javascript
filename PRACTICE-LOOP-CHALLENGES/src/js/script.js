const impares = document.querySelector("#impares");
const multiplos = document.querySelector("#multiplos");
const secuencia = document.querySelector("#secuencia");
const sigma = document.querySelector("#sigma");
const factorial = document.querySelector("#factorial");
console.log(impares, multiplos, secuencia, sigma, factorial);

//impares
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    impares.innerHTML += `<li>${i}</li>`;
    console.log(i);
  }
}
//impares

//multiplos de 3
for (let i = 100; i >= 0; i--) {
  if (i % 3 === 0) {
    multiplos.innerHTML += `<li>${i}</li>`;
    console.log(i);
  }
}
//multiplos de 3

//secuencia de numeros
let num = 4;
for (let i = 0; i < 6; i++) {
  console.log(num);
	secuencia.innerHTML += `<li>${num}</li>`;
  num -= 1.5;
}

//secuencia de numeros

//sigma
let sum = 0;
for (let i = 1; i <= 100; i++) {
	sigma.innerHTML += `<li>${sum} + ${i} = ${sum + i}</li>`;
  sum += i;
}
sigma.innerHTML += `<li id='product'>${sum}</li>`;
console.log(sum);
//sigma

//factorial
let product = 1;
for (let i = 1; i <= 12; ++i) {
  factorial.innerHTML += `<li>${product} x ${i} = ${product * i}</li>`;
  product *= i;
}
factorial.innerHTML += `<li id='product'>${product}</li>`;
console.log(product);
//factorial
