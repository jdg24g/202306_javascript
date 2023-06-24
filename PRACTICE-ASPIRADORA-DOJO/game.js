
var elDojo = [
  [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
  [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
  [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
  [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
  [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
  [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
  [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
  [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
  [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
  [9, 2, 2, 2, 0, 7, 0, 1, 1, 0]
];


var ninjasColocados = 0;


var tamañoDojo = elDojo.length * elDojo[0].length;


while (ninjasColocados < 10) {
  var índiceAleatorio = Math.floor(Math.random() * tamañoDojo);
  var fila = Math.floor(índiceAleatorio / elDojo[0].length);
  var columna = índiceAleatorio % elDojo[0].length;

  if (elDojo[fila][columna] === 0) {
    elDojo[fila][columna] = 1;
    ninjasColocados++;
  }
}


var dojoDiv = document.querySelector("#the-dojo");


function contarNinjasAdyacentes(fila, columna, elemento) {
  var cantidad = 0;
  for (var filaAdyacente = fila - 1; filaAdyacente <= fila + 1; filaAdyacente++) {
    for (var columnaAdyacente = columna - 1; columnaAdyacente <= columna + 1; columnaAdyacente++) {
      if (filaAdyacente >= 0 && filaAdyacente < elDojo.length && columnaAdyacente >= 0 && columnaAdyacente < elDojo[filaAdyacente].length) {
        if (elDojo[filaAdyacente][columnaAdyacente] > 0) {
          cantidad += elDojo[filaAdyacente][columnaAdyacente];
        }
      }
    }
  }
  elemento.innerText = cantidad;
  elemento.classList.add('revealed');
  if (elDojo[fila][columna] > 0) {
    elemento.classList.add('ninja');
  }
}


function renderizarDojo(dojo) {
  var resultado = "";
  for (var fila = 0; fila < dojo.length; fila++) {
    for (var columna = 0; columna < dojo[fila].length; columna++) {
      resultado += `<button class="cell tatami" onclick="contarNinjasAdyacentes(${fila}, ${columna}, this)"></button>`;
    }
    resultado += "<br>";
  }
  dojoDiv.innerHTML = resultado;
}


function reiniciarJuego() {
  location.reload();
}


renderizarDojo(elDojo);


var botonReinicio = document.createElement("button");
botonReinicio.innerText = "Reiniciar";
botonReinicio.className = "boton-reinicio";
botonReinicio.addEventListener("click", reiniciarJuego);


dojoDiv.appendChild(botonReinicio);

var estilo = "color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%cSI ERES UN ESTUDIANTE DEL DOJO...", estilo);
console.log("%c¡BUENA SUERTE, ESTE ES UN DESAFÍO!", estilo);


console.table(elDojo);
