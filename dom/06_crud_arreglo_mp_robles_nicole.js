let pacientes = [
    {
        id: 1,
        nombre: "Max",
        especie: "Perro",
        estado: "Sano"

    },
    {
        id: 2, 
        nombre: "Michi",
        especie: "Gato",
        estado: "Enfermo"

    },
    {
        id: 3, 
        nombre: "Luna",
        especie: "Conejo",
        estado: "En observación"

    },
];

const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const especie = document.getElementById("especie");
const estado = document.getElementById("estado");
const guardar = document.getElementById("guardar");
const cancelar = document.getElementById("cancelar");
const cantidad = document.getElementById("cantidad");
const contenedor = document.getElementById("contenedor");
console.log("mostrarPacientes");
function mostrarPacientes(){
    contenedor.replaceChildren();
    cantidad.textContent = "Cantidad: " + pacientes.length;
    pacientes.forEach(function(paciente){
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    const titulo = document.createElement("h3");
    titulo.textContent = paciente.nombre;
    const parrafoEspecie = document.createElement("p");
    parrafoEspecie.textContent = "Especie: " + paciente.especie;
    const parrafoEstado = document.createElement("p");
    parrafoEstado.textContent = "Estado: " + paciente.estado;
    const acciones = document.createElement("div");
    acciones.classList.add("acciones");
    const botonEditar = document.createElement("button");
    botonEditar.textContent = "Editar";
    botonEditar.classList.add("editar");
    botonEditar.addEventListener("click", function(){
        editarPaciente(paciente.id)
    });
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.classList.add("eliminar");
    botonEliminar.addEventListener("click", function () {
        eliminarPaciente(paciente.id)
    });

    acciones.append(botonEditar, botonEliminar);
    tarjeta.append(titulo, parrafoEspecie, parrafoEstado, acciones);
    contenedor.appendChild(tarjeta);
  });

}

function eliminarPaciente(id) {
  const paciente = pacientes.find(function (paciente) {
    return paciente.id == id
  })
  const confirmar = confirm("¿Eliminar a " + paciente.nombre + "?");
  if (!confirmar) {
    return
  }
  pacientes = pacientes.filter(function (paciente) {
    return paciente.id != id;
  })
  mostrarPacientes();
}

let idEditando = null;
function editarPaciente(id){
    const paciente = pacientes.find(function(p){
        return p.id ==id
    })
    nombre.value = paciente.nombre;
    especie.value = paciente.especie;
    estado.value = paciente.estado;
    idEditando = id;
    guardar.textContent = "Editar";
    cancelar.hidden = false;
    nombre.focus()

}
mostrarPacientes();
let siguienteId = 4;
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    const nombrePaciente = nombre.value.trim();
    const especiePaciente = especie.value;
    const estadoPaciente = estado.value;
    if (idEditando === null){
        const nuevoPaciente ={
            id: siguienteId,
            nombre: nombrePaciente,
            especie: especiePaciente,
            estado: estadoPaciente,
        }
        siguienteId++;
        pacientes.push(nuevoPaciente);
    } else {
        const paciente = pacientes.find(function (p) {
            return p.id == idEditando
        })
        paciente.nombre = nombrePaciente;
        paciente.especie = especiePaciente;
        paciente.estado = estadoPaciente;
    }

    mostrarPacientes();
    limpiarFormulario();
})

function limpiarFormulario(){
  formulario.reset();
  idEditando = null;
  guardar.textContent = "Agregar";
  cancelar.hidden = true;
}

cancelar.addEventListener("click", function () {
  limpiarFormulario()
});