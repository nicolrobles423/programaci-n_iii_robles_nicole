const personaje = document.getElementById("personaje");
const cambiar = document.getElementById("cambiar");
const verDimension = document.getElementById("verDimension");
const dimension = document.getElementById("dimension");

cambiar.addEventListener("click", function() {
  if(personaje.getAttribute("title")=="Robin"){
    personaje.setAttribute("src", "nami.jpg");
    personaje.setAttribute("title", "Nami");
    personaje.dataset.dimension = "Wano";
  } else {
    personaje.setAttribute("src", "robin.jpg");
    personaje.setAttribute("title", "Robin");
    personaje.dataset.dimension = "Egghead";
  }
});

verDimension.addEventListener("click", function() {
  dimension.textContent = personaje.dataset.dimension;
});

const portal = document.getElementById("portal");
const activarPortal = document.getElementById("activarPortal");

activarPortal.addEventListener("click", function() {
  portal.style.backgroundColor = "green";
  portal.style.color = "white";
  portal.textContent = "Portal activado";
});