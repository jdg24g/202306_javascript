const enlacesCiudad = document.querySelectorAll(".ciudad");
console.log(enlacesCiudad[2].textContent);


enlacesCiudad.forEach(function (enlace) {
  enlace.addEventListener("click", function (evento) {
    evento.preventDefault(); 
    const nombreCiudad = enlace.textContent; 

    const h3Elemento = document.querySelector(".subheader h3");
    alert("Cargando informe meteorolégico...\n")
    h3Elemento.textContent = nombreCiudad;

    console.log(`Mostrar información de la ciudad: ${nombreCiudad}`);
  });
});
