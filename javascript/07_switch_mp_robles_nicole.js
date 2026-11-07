let consultorio = 3;
switch (consultorio) {
    case 1:
        console.log("Estás en el consultorio de medicina general con la Dra. Nicole.");
        break;
    case 2:
        console.log("Estás en el quirófano con el Dr. Romeo.");
        break;
    case 3:
        console.log("Estás en la peluquería con Belki.");
        break;
    case 4:
        console.log("Estás en la sala de espera de Patitas Felices.");
        break;
    default:
        console.log("Consultorio desconocido.");
}
let paciente = "Max";
switch (paciente) {
    case "Max":
    case "Rocky":
        console.log("Hola Max o Rocky, ¿cómo están mis perritos?");
        break;
    case "Michi":
        console.log("Hola Michi, ¿cómo está mi gatito?");
        break;
    default:
        console.log("Paciente desconocido.");
}

let temperatura = 38.5;
switch (true) {
    case (temperatura > 0 && temperatura < 37.5):
        console.log("Temperatura baja, revisar al paciente.");
        break;
    case (temperatura >= 37.5 && temperatura <= 39.2):
        console.log("Temperatura normal.");
        break;
    case (temperatura > 39.2 && temperatura <= 40):
        console.log("Tiene fiebre.");
        break;
    case (temperatura > 40):
        console.log("Fiebre muy alta, atención urgente.");
        break;
    default:
        console.log("Temperatura desconocida.");
}

console.log("Calculadora de dosis con Switch");
let pesoKilos = 10;
let mlPorKilo = 5;
let operacion = "multiplicacion";
let resultado;
switch (operacion) {
    case "suma":
        resultado = pesoKilos + mlPorKilo;
        break;
    case "resta":
        resultado = pesoKilos - mlPorKilo;
        break;
    case "multiplicacion":
        resultado = pesoKilos * mlPorKilo;
        break;
    case "division":
        if (mlPorKilo !== 0) {
            resultado = pesoKilos / mlPorKilo;
        } else {
            console.log("Error: No se puede dividir entre cero.");
        }
        break;
    default:
        console.log("Operación desconocida.");
}

if (resultado !== undefined) {
    console.log("Resultado de la operación", operacion, ":", resultado);
}
