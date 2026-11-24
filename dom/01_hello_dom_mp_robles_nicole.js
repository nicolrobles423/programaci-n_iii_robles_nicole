console.log(document);
const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.textContent = "Veterinaria Patitas Felices";


const estado = document.getElementById("estado");
const boton = document.getElementById("botonConsultorio");
boton.addEventListener("click", function() {
  console.log("Ejecutado click");
  estado.textContent = "¡Consultorio Abierto!";
  console.log("Texto cambiado en el elemento estado");
  alert("Proceso de apertura del consultorio terminado");
});

const mensaje = document.getElementById("mensaje");
const botonMensaje = document.getElementById("botonMensaje");
botonMensaje.addEventListener("click", function() {
  mensaje.textContent = "¡Max listo para su vacuna!";
});

let consultas = 0;
const contador = document.getElementById("contador");
const nuevaConsulta = document.getElementById("nuevaConsulta");
nuevaConsulta.addEventListener("click", function() {
  consultas += 1;
  contador.textContent = consultas;
});
