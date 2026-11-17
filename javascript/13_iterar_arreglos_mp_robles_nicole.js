let dosis = [30, 50, 70, 40];
let posicion = 2;
let nuevaDosis = 100;
for (let i = 0; i < dosis.length; i++) {
  console.log("Posición ", i);
  console.log("Dosis: ", dosis[i], "mg");
  if (posicion >= 0 && posicion < dosis.length) {
    dosis[posicion] = nuevaDosis;
  } else {
    console.log("Posición no válida");
  }
}
console.log(dosis);

let pacientes = [
  { id: 1, nombre: "Max", peso: 30, edad: 5 },
  { id: 2, nombre: "Michi", peso: 4, edad: 3 },
  { id: 3, nombre: "Rocky", peso: 25, edad: 8 },
]
for (let paciente of pacientes) {
  console.log("ID:", paciente.id);
  console.log("Nombre:", paciente.nombre);
  console.log("Peso:", paciente["peso"], "kg");
  console.log("Edad:", paciente["edad"], "años");
}

console.log("Patitas Felices organiza las atenciones del día");
let atenciones = [
  {
    encargado: "Dra. Nicole",
    pacientes: [3, 5, 6]
  },
  {
    encargado: "Dr. Romeo",
    pacientes: [2, 3, 3]
  },
  {
    encargado: "Belki",
    pacientes: [9, 8, 7]
  }
];
let totalPacientes = 0;
for (let atencion of atenciones) {
    totalPacientes = 0;
    console.log("Encargado: ", atencion.encargado);
    for (let cantidad of atencion.pacientes) {
        console.log("Pacientes atendidos en el turno ", cantidad);
        totalPacientes += cantidad;
    }
    console.log("Total de pacientes atendidos por", atencion.encargado, ":", totalPacientes);
}

let dosisOriginales = [30, 50, 70, 40];
let dosisDobles = dosisOriginales.map(elemento => {
    return elemento * 2;
});
console.log(dosisDobles);
let validas = dosisOriginales.filter(dosisActual => dosisActual >= 50);
console.log(validas);
let resultado = dosisOriginales.reduce((acumulador, elemento) => {
    return acumulador + elemento;
});
console.log(resultado);
