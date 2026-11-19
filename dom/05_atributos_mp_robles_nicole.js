const paciente = document.getElementById("paciente");
const cambiar = document.getElementById("cambiar");
const verConsultorio = document.getElementById("verConsultorio");
const consultorio = document.getElementById("consultorio");

cambiar.addEventListener("click", function() {
  if (paciente.getAttribute("title") == "Rocky") {
    paciente.setAttribute("src", "gato_consulta.jpg");
    paciente.setAttribute("title", "Michi");
    paciente.dataset.consultorio = "Vacunación";
  } else {
    paciente.setAttribute("src", "perro_consulta.jpg");
    paciente.setAttribute("title", "Rocky");
    paciente.dataset.consultorio = "Medicina general";
  }
});

verConsultorio.addEventListener("click", function() {
  consultorio.textContent = paciente.dataset.consultorio;
});

const clinica = document.getElementById("clinica");
const abrirClinica = document.getElementById("abrirClinica");

abrirClinica.addEventListener("click", function() {
  clinica.style.backgroundColor = "teal";
  clinica.style.color = "white";
  clinica.textContent = "Clínica abierta";
});
