const prompt = require("prompt-sync")({ sigint: true });
console.log("Condicional If");
let temperatura = 38.5;
console.log("Condicional Simple If");
if (temperatura > 0) {
    console.log("Max tiene la temperatura registrada, podemos empezar la consulta.");
}

console.log("Condicional If-Else Dos Caminos");
let dosisVacuna = 3;
if (dosisVacuna > 0) {
    console.log("Hay vacunas suficientes para atender a los pacientes.");
} else {
    console.log("No hay vacunas suficientes para atender a los pacientes.");
}

console.log("Condicional If-Else If Múltiples Caminos");
let especie = prompt("Dra. Nicole, ¿qué especie es el paciente? ");
if (especie === "perro") {
    console.log("El paciente es un perro, pasa al consultorio 1.");
} else if (especie === "gato") {
    console.log("El paciente es un gato, pasa al consultorio 2.");
} else {
    console.log("Especie desconocida, consultar con el Dr. Romeo.");
}

console.log("Condicional If Anidado");
let temperatura2 = 38.5;
let peso2 = 12;

if (temperatura2 > 0) {
    if (peso2 > 0) {
        console.log("Max tiene temperatura y peso registrados, puede pasar a consulta.");
    } else {
        console.log("Max tiene temperatura registrada, pero falta registrar su peso.");
    }
}

console.log("Condicional If con Operadores Lógicos");
let temperatura3 = 38.5;
let peso3 = 12;

if (temperatura3 > 0 && peso3 > 0) {
    console.log("Max tiene temperatura y peso registrados, puede pasar a consulta.");
} else {
    console.log("Falta registrar la temperatura o el peso de Max.");
}
console.log("Control de cirugías");
let anestesia = 400;
let ayunoHoras = 12;
let romeo_disponible = "no";
let nicole_disponible = "no";
let quirofano_ocupado = "no";

if (anestesia >= 50 &&
ayunoHoras >= 8 &&
(romeo_disponible === "si" ||
nicole_disponible === "si") &&
quirofano_ocupado === "no")
{
    console.log("Rocky puede entrar a cirugía.");
} else {
    if (anestesia < 50)
    {
        console.log("Rocky no puede entrar a cirugía, no hay suficiente anestesia.");
    }
    if (ayunoHoras < 8)
    {
        console.log("Rocky no puede entrar a cirugía, no cumplió las horas de ayuno.");
    }
    if (romeo_disponible === "no")
    {
        console.log("Rocky no puede entrar a cirugía, el Dr. Romeo no está disponible.");
    }
    if (nicole_disponible === "no")
    {
        console.log("Rocky no puede entrar a cirugía, la Dra. Nicole no está disponible.");
    }
    if (quirofano_ocupado === "si")
    {
        console.log("Rocky no puede entrar a cirugía, el quirófano está ocupado.");
    }
    if (romeo_disponible === "no" && nicole_disponible === "no")
    {
        console.log("Rocky no puede entrar a cirugía, ni el Dr. Romeo ni la Dra. Nicole están disponibles.");
    }

}



console.log("Jornada de vacunación");
let vacunasObjetivo = 200;
let vacunasAplicadas = 150;
let presupuestoInicial = 1000;
let presupuestoGastado = 850;
let lunaEnferma = "si";
let ambulanciaAveriada = "no";
let bonificacion = 0;
let porcentajeCumplimiento = (vacunasAplicadas / vacunasObjetivo) * 100;
let presupuestoRestante = presupuestoInicial - presupuestoGastado;
console.log("RESULTADOS DE LA JORNADA");
if (porcentajeCumplimiento >= 90) {
    console.log("Jornada Cumplida con Éxito");
} else if (porcentajeCumplimiento >= 70 && porcentajeCumplimiento < 90) {
    console.log("Jornada Cumplida Parcialmente");
} else if (porcentajeCumplimiento >= 50 && porcentajeCumplimiento < 70) {
    console.log("Jornada Regular, se requiere mejorar el desempeño");
} else {
    console.log("Jornada Fallida, hay que reprogramar las vacunas");
}

console.log("Evaluación de bonificación por desempeño");
if (porcentajeCumplimiento >= 90 && presupuestoRestante >= 200) {
    bonificacion = 1000;
    console.log("Bonificación otorgada por desempeño excelente.");
} else {
    console.log("No se otorga bonificación por desempeño.");
}

console.log("Regreso seguro a la clínica");
if (lunaEnferma === "no" && ambulanciaAveriada === "no") {
    console.log("Regreso seguro a la clínica.");
} else if (lunaEnferma === "si" && ambulanciaAveriada === "no") {
    console.log("Regreso a la clínica con precaución, Luna está enferma.");
} else if (lunaEnferma === "no" && ambulanciaAveriada === "si") {
    console.log("Regreso a la clínica con precaución, la ambulancia está averiada.");
} else {
    console.log("Regreso a la clínica con precaución, Luna está enferma y la ambulancia está averiada.");
}

console.log("Resumen de la jornada");
console.log("Vacunas Objetivo:", vacunasObjetivo);
console.log("Vacunas Aplicadas:", vacunasAplicadas);
console.log("Porcentaje de Cumplimiento:", porcentajeCumplimiento.toFixed(2) + "%");
console.log("Presupuesto Inicial:", presupuestoInicial);
console.log("Presupuesto Gastado:", presupuestoGastado);
console.log("Presupuesto Restante:", presupuestoRestante);
console.log("Luna Enferma:", lunaEnferma);
console.log("Ambulancia Averiada:", ambulanciaAveriada);
console.log("Bonificación Otorgada:", bonificacion);
