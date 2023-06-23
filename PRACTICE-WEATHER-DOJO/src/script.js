function eliminarCookies() {
  var contenedorCookie = document.getElementById("cookie");
  contenedorCookie.style.display = "none";
}

function cToF(celsius) {
  var fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

function fToC(fahrenheit) {
  var celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

const enlacesCiudad = document.querySelectorAll(".ciudad");

enlacesCiudad.forEach(function (enlace) {
  enlace.addEventListener("click", function (evento) {
    evento.preventDefault();
    const nombreCiudad = enlace.textContent;

    const h3Elemento = document.querySelector(".subheader h3");
    alert("Cargando informe meteorolégico...\n");
    h3Elemento.textContent = nombreCiudad;

    console.log(`Mostrar información de la ciudad: ${nombreCiudad}`);
  });
});

const max = document.querySelectorAll(".num-1");

const min = document.querySelectorAll(".num-2");
console.log(min[0].textContent);

var selector = document.getElementById("temperature-select");

selector.addEventListener("change", function () {
  var selectedValue = selector.value;

  console.log("El valor seleccionado es: " + selectedValue);
  if (selectedValue == "C") {
    max.forEach(function (elemento) {
      elemento.textContent = `${Math.round(
        fToC(parseInt(elemento.textContent))
      )}º`;
    });
    min.forEach(function (elemento) {
      elemento.textContent = `${Math.round(
        fToC(parseInt(elemento.textContent))
      )}º`;
    });
  } else if (selectedValue == "F") {
    max.forEach(function (elemento) {
      elemento.textContent = `${Math.round(
        cToF(parseInt(elemento.textContent))
      )}º`;
    });
    min.forEach(function (elemento) {
      elemento.textContent = `${Math.round(
        cToF(parseInt(elemento.textContent))
      )}º`;
    });
  }
});
