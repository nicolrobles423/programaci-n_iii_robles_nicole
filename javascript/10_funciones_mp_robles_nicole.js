console.log("Patitas Felices: Funciones en JavaScript");

function abrirConsultorio() {
    console.log("Consultorio abierto. ¡Pasen, peluditos!");
}
abrirConsultorio();
abrirConsultorio();
abrirConsultorio();
abrirConsultorio();

function veterinarioDeTurno(nombre) {
    console.log("El/la " + nombre + " está de turno en la clínica.");
}
veterinarioDeTurno("Dra. Nicole");
veterinarioDeTurno("Dr. Romeo");


function recargarSuero(nivelActual, recarga) {
  let nivelTotal = nivelActual + recarga;
  if (nivelTotal > 100) {
    nivelTotal = 100;
  }
  console.log("Suero de Luna recargado. Nivel de la bolsa: " + nivelTotal + "%");
  return nivelTotal;
}
let nivelSuero = 50;
nivelSuero = recargarSuero(nivelSuero, 30);
nivelSuero = recargarSuero(nivelSuero, 40);


console.log("Calcular descuentos de la peluquería de Belki");
function calcularDescuento(precio, descuento) {
  let precioFinal = precio - (precio * (descuento / 100));
  return precioFinal;
}
let precioOriginal = 100;
let porcentajeDescuento = 20;
let precioConDescuento = calcularDescuento(precioOriginal, porcentajeDescuento);
console.log("Precio original: " + precioOriginal + " soles, Precio con descuento: " + precioConDescuento + " soles");

function evaluarVacunasChequeo(vacunas, controlesBien, totalControles) {
    let porcentajeBien = (controlesBien / totalControles) * 100;
    if (vacunas < 20) {
        console.log("Advertencia: Quedan pocas vacunas. Nivel actual: " + vacunas + "%");
    }
    if (porcentajeBien >= 70) {
        console.log("¡Felicidades! El paciente aprobó el chequeo con un " + porcentajeBien + "% de controles en buen estado.");
    } else {
        console.log("Lo siento, el paciente necesita otro chequeo: solo un " + porcentajeBien + "% de controles en buen estado.");
    }
}
evaluarVacunasChequeo(15, 8, 10);
evaluarVacunasChequeo(50, 6, 10);

function calcularTotalCroquetas(raciones) {
    let total = 0;
    for (const racion of raciones) {
        total += racion;
    }
    return total;
}

console.log(calcularTotalCroquetas([10, 20, 30, 40, 50]));

function contarConsultasLargas(minutos) {
    let largas = 0;
    for (const minuto of minutos) {
        if (minuto > 50) {
            largas++;
        }
    }
    return largas;
}

console.log(contarConsultasLargas([10, 60, 50, 80, 51]));
