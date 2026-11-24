const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent = "Mensaje desde Patitas Felices";
saludo.innerHTML = "<h1>Bienvenidos con innerHTML</h1>";

const ficha = document.getElementById("ficha");
ficha.innerHTML = `
  <h1>Max</h1>
  <p>Consultorio: 3</p>
  <p>Especie: Perro</p>
  <p>Estado: Sano</p>
`;

const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registrar = document.getElementById("registrar");
registrar.addEventListener("click", function() {
  console.log("Ejecutado click", nombre.value);
  saludar.textContent = "Hola " + nombre.value;
});
