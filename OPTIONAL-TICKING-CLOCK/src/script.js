const hor = document.querySelector("#hor");
const min = document.querySelector("#min");
const seg = document.querySelector("#seg");

function obtenerHora() {
  return (
    new Date().getSeconds() +
    new Date().getMinutes() * 60 +
    new Date().getHours() * 3600
/*se suman para obtener el número total de segundos transcurridos desde el inicio del día */
  );
}

function manecillaHora(segCalc) {
  segCalc %= 43200;
  return ((360 * segCalc) / 43200 + 180) % 360;
}

function macillaMinuto(segCalc) {
  segCalc %= 3600;
  return ((6 * segCalc) / 60 + 180) % 360;
}

function manecillaSegundo(segCalc) {
  segCalc %= 60;
  return (6 * segCalc + 180) % 360;
}
/*Se suma 180 grados al ángulo calculado anteriormente.
Esto se hace para compensar el desfase inicial y posicionar correctamente la manecilla de la hora en el reloj. */
setInterval(() => {
  let s = obtenerHora();
  hor.style.transform = `rotate(${manecillaHora(s)}deg)`;
  min.style.transform = `rotate(${macillaMinuto(s)}deg)`;
  seg.style.transform = `rotate(${manecillaSegundo(s)}deg)`;
}, 1000);
