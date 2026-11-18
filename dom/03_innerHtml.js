const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent = "Mensaje desde otro Universo";
saludo.innerHTML = "<h1>Hello con innerHTML</h1>";

const ficha = document.getElementById("ficha");
saludo.innerHTML = `
  <h1>Rick Sanchez</h1>
  <p>Dimensión: C-137</p>
  <p>Especie: Humano</p>
  <p>Estado: Vivo</p>
`;



const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registrar = document.getElementById("registrar");
registrar.addEventListener("click", function() {
  console.log("Ejecutado click", nombre.value);
  saludar.textContent = "Hola " + nombre.value;
});                       