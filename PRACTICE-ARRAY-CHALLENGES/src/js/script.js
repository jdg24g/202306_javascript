siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
siempreHambriento([4, 1, 5, 7, 2]);

function siempreHambriento(arr) {
  let encontradoComida = false;

  for (const elemento of arr) {
    if (elemento === "comida") {
      console.log("delicioso");
      encontradoComida = true;
    }
  }

  if (!encontradoComida) {
    console.log("Tengo hambre");
  }
//alwaysHungry([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
//alwaysHungry([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"
}

const siempreHambrientoFun = siempreHambriento.toString();
var a = (document.getElementById(
  "siempreHambriento"
).innerHTML = `<code class="language-js">${siempreHambrientoFun}</code>`);
//siempreHambrientoFun
//highPass
function highPass(arr, cutoff) {
  var filteredArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > cutoff) {
      filteredArr.push(arr[i]);
    }
  }
//var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
//console.log(result);  esperamos de vuelta [6, 8, 10, 9]
  return filteredArr;
}

console.log(
  `resultado Filtro paso alto: ${highPass([6, 8, 3, 10, -2, 5, 9], 5)}`
);

const highPassFun = highPass.toString();
var b = (document.getElementById(
  "highPass"
).innerHTML = `<code class="language-js">${highPassFun}</code>`);
//highPass
//betterThanAverage
function betterThanAverage(arr) {
  var sum = 0;
  // Calcula la suma de todos los números en el arreglo
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  var average = sum / arr.length;
  var count = 0;

  // Cuenta cuántos números son mayores que el promedio
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > average) {
      count++;
    }
  }
//var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
//console.log(result);  esperamos 4 de vuelta
  return count;
}

var betterThanAverageText = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(betterThanAverageText); // 4

const betterThanAverageFun = betterThanAverage.toString();
var c = document.getElementById("betterThanAverage");
c.innerHTML = `<code class="language-js">${betterThanAverageFun}}`

//betterThanAverage


//reverse
function reverse(arr) {
  var reversedArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
//var result = reverse(["a", "b", "c", "d", "e"]);
//console.log(result); esperamos de vuelta ["e", "d", "c", "b", "a"]
  return reversedArr;
}

var reverseResult = reverse(["a", "b", "c", "d", "e"]);
console.log(reverseResult); // Devuelve ["e", "d", "c", "b", "a"]



const reverseFun = reverse.toString();

var d = document.getElementById("reverse");

d.innerHTML = `<code class="language-js">${reverseFun}</code>`
//reverse

//fibonacci
function fibonacciArray(n) {
  var fibArr = [0, 1];

  // Genera los números de Fibonacci hasta alcanzar la longitud n
  while (fibArr.length < n) {
    var length = fibArr.length;
    var nextFib = fibArr[length - 1] + fibArr[length - 2];
    fibArr.push(nextFib);
  }
//var result = fibonacciArray(10);
//console.log(result);  esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
  return fibArr;
}

var fibonacciArrayResult = fibonacciArray(10);
console.log(fibonacciArrayResult); // Devuelve [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

const fibonacciArrayFun = fibonacciArray.toString();

var e = document.getElementById("fibonacci");

e.innerHTML = `<code class="language-js">${fibonacciArrayFun}</code>`

//fibonacci