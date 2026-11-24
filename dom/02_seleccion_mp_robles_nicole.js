const suero = document.getElementById("suero");
const consultorio = document.getElementById("consultorio");
const clinica = document.getElementById("clinica");

suero.textContent = "Suero: 100";
consultorio.textContent = "Consultorio: 3";
clinica.textContent = "Clínica: abierta";

// Selección a través del nombre de la clase
const paciente = document.querySelector(".paciente");
paciente.textContent = "Max - Labrador";

const h2Objeto = document.querySelector("h2");
h2Objeto.textContent = "Preparando Consultorio";

const vacuna = document.querySelector("#vacuna");
vacuna.textContent = "Preparando Vacuna";

const estadoMichi = document
            .querySelector("#michi .estado");
estadoMichi.textContent = "Preparado para su chequeo";

const servicios = document
                    .querySelectorAll(".servicio");
console.log(servicios);
console.log(servicios.length);

console.log(servicios[0].textContent);
console.log(servicios[1].textContent);
console.log(servicios[2].textContent);
console.log(servicios[3].textContent);
console.log(servicios[4].textContent);
console.log(servicios[5].textContent);

console.log("Recorrer a través de for");
for (let i = 0; i < servicios.length; i++) {
  console.log(servicios[i].textContent);
}
console.log("Con forEach");
servicios.forEach(function(servicio) {
  console.log(servicio.textContent);
});

console.log("Con for of");
for (let servicio of servicios) {
  console.log(servicio.textContent);
}
