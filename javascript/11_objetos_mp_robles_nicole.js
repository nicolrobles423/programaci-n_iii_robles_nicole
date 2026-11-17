let nombre = "Max";
let edad = 5;
let especie = "Perro";
let peso = 30;
let enfermo = false;

let paciente = {
    nombre: "Max",
    edad: 5,
    especie: "Perro",
    peso: 30,
    enfermo: false,

}

console.log("Información del paciente de Patitas Felices:");
console.log("Paciente", paciente);
console.log("Nombre del paciente: " + paciente.nombre);
console.log("Edad del paciente: " + paciente["edad"] + " años");
console.log("Especie: " + paciente["especie"]);
console.log("Peso: " + paciente.peso + " kg");
console.log("Estado del paciente: " + (paciente.enfermo ? "Enfermo" : "Sano"));

console.log("Agregar una nueva propiedad al paciente");
paciente.veterinario = "Dra. Nicole";
console.log("Veterinario a cargo: " + paciente.veterinario);
paciente["vacunasAplicadas"] = 5;
console.log("Vacunas aplicadas: " + paciente["vacunasAplicadas"]);
console.log("Paciente", paciente);

console.log("Actualizar el peso del paciente");
paciente.peso = 28;
console.log("Nuevo peso: " + paciente.peso + " kg");
paciente["enfermo"] = true;
console.log("Nuevo estado del paciente: " + (paciente.enfermo ? "Enfermo" : "Sano"));
console.log("Paciente", paciente);
console.log("Eliminar una propiedad del paciente");
delete paciente.vacunasAplicadas;
console.log("Propiedad 'vacunasAplicadas' eliminada.");
console.log("Paciente", paciente);

let productos = [
    { nombre: "Vacuna antirrábica", cantidad: 3 },
    { nombre: "Champú antipulgas", cantidad: 10 },
    { nombre: "Bolsas de croquetas", cantidad: 7 },
    { nombre: "Collar isabelino", cantidad: 1 }
];

let total = 0;

for (let producto of productos) {
    total += producto.cantidad;
}

console.log("Total de unidades en el inventario: " + total);
