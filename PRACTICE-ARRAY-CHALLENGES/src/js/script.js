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

  return count;
}

var betterThanAverageText = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // 4

//betterThanAverage
