console.log(document);
const titulo = document.getElementById("titulo");
console.log(titulo);
titulo.textContent ="Laboratorio Interdimencional";


const estado = document.getElementById("estado");
const boton = document.getElementById("botonPortal");
boton.addEventListener("click", function() {
  console.log("Ejecutado click");
  estado.textContent = "¡Portal Activado!";
  console.log("Texto Cambiado en el elemento estado");
  alert("Proceso de Activación del Portal Terminado");
});

const mensaje = document.getElementById("mensaje");
const botonMensaje = document.getElementById("botonMensaje");
botonMensaje.addEventListener("click", function() {
  mensaje.textContent = "Morty Listo para la Aventura!";
});

let viajes = 0;
const contador = document.getElementById("contador");
const nuevoViaje = document.getElementById("nuevoViaje");
nuevoViaje.addEventListener("click", function() {
  viajes += 1;
  contador.textContent = viajes;
});
