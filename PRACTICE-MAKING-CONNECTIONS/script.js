console.log("Página cargada...");

document.addEventListener("DOMContentLoaded", function () {
  var botonEditarPerfil = document.querySelector(".user-card a");

  botonEditarPerfil.addEventListener("click", function (evento) {
    evento.preventDefault();
    var nuevoNombreUsuario = prompt("Ingrese un nuevo nombre:");

    if (nuevoNombreUsuario) {
      var elementoNombreUsuario = document.querySelector(".user-card h1");
      elementoNombreUsuario.textContent = nuevoNombreUsuario;
    }
  });

  var elementosSolicitudConexion = document.querySelectorAll(".card-list-item");

  if (elementosSolicitudConexion) {
    elementosSolicitudConexion.forEach(function (item) {
      var botonAceptar = item.querySelector(".icon.accept");
      var botonCerrar = item.querySelector(".icon.no-accept");

      if (botonAceptar && botonCerrar) {
        botonAceptar.addEventListener("click", function () {
          item.remove();
          aumentarValorInsignia();
          var addicionar = document.getElementById("badge-connection");
          addicionar.textContent = parseInt(addicionar.textContent) + 1;
        });

        botonCerrar.addEventListener("click", function () {
          item.remove();
          aumentarValorInsignia();
        });
      }
    });
  }

  function aumentarValorInsignia() {
    var elementoInsignia = document.querySelector(".card-header .badge");
    
    if (elementoInsignia) {
      elementoInsignia.textContent = parseInt(elementoInsignia.textContent) - 1;

      if (elementoInsignia.textContent === "0") {
        var conexion = document.getElementById("connection");
        if (conexion) {
          conexion.remove();
        }
      }
    }
  }
});
