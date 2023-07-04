// function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
//     var pizza = {
//       tipoCorteza: tipoCorteza,
//       tipoSalsa: tipoSalsa,
//       quesos: quesos,
//       salsas: salsas
//     };
  
//     return pizza;
//   }
//funcion original
var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);

var pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);

var pizza3 = pizzaOven("estilo NY", "barbacoa", ["cheddar"], ["pollo", "cebolla caramelizada"]);

var pizza4 = pizzaOven("sin gluten", "pesto", ["queso de cabra"], ["espinacas", "tomates secados al sol"]);

function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {
        tipoCorteza: tipoCorteza,
        tipoSalsa: tipoSalsa,
        quesos: quesos,
        salsas: salsas
    };
    return JSON.stringify(pizza);
}

const select = document.querySelector("#pizza");
const container = document.querySelector(".container");

select.addEventListener("input", function(event) {
    console.log(event.target.value);
    if (event.target.value == "pizza1") {
        alert(pizza1);
    } else if (event.target.value == "pizza2") {
        alert(pizza2);
    } else if (event.target.value == "pizza3") {
        alert(pizza3);
    } else if (event.target.value == "pizza4") {
        alert(pizza4);
    }
});
