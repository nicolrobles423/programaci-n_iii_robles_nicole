const energia = document.getElementById("energia");
const dimension = document.getElementById("dimension");
const portal = document.getElementById("portal");

energia.textContent = "Energia: 100";
dimension.textContent = "Dimensión: C-137";
portal.textContent = "Portal: activado";

// Selección a través del nombre de la clase//
const personaje = document.querySelector(".personaje")
personale.textContent="Rick C-137";

const h2Objeto = document.querySelector("h2")
personale.textContent="Preparando Nave";

const universo = document.querySelector("#universo")
personale.textContent="Preparando Universo";

const estadoMorty = document
            .querySelector("#Morty .estado");
estadoMorty.textContent="Preparado para viajar";

const planetas = document
                    .querySelector(".planeta")
console.log(planetas);
console.log(olanetas.length);

console.log(planetas[0].textContent);
console.log(planetas[1].textContent);
console.log(planetas[2].textContent);
console.log(planetas[3].textContent);
console.log(planetas[4].textContent);
console.log(planetas[5].textContent);

console.log("Recorrer a traves de for");
for (let i = 0; i < planetas.length; i++) {
  console.log(planetas[i].textContent);
}
console.log("Con forEach");
planetas.forEach(function(planeta) {
  console.log(planeta.textContent);
});

console.log("Con for of");
for (let planeta of planetas) {
  console.log(planeta.textContent);
}