console.log("Ciclo For");
for (let i = 1; i <= 5; i++) {
    console.log("Paciente atendido número: " + i);
}

console.log("Cuenta regresiva para abrir la clínica Patitas Felices");
for (let i = 10; i >= 0; i--) {
    console.log("Faltan " + i + " minutos para abrir la clínica.");
}

console.log("Cuenta regresiva para abrir la clínica con mensaje final");
for (let i = 10; i >= 0; i--) {
    if (i === 0) {
        console.log("¡La clínica está abierta!");
    } else {
        console.log("Faltan " + i + " minutos para abrir la clínica.");
    }
}

console.log("Recuperación de Rocky después de la cirugía");
let recuperacion = 50;
for (let i = 0; i <= 100; i += 10) {
    if (recuperacion >= i) {
        console.log("Nivel de recuperación: " + i + "%");
    }
}

let croquetasPorDia = 10;
let totalCroquetas = 0;
for (let dia = 1; dia <= 5; dia++) {
    totalCroquetas += croquetasPorDia;
    console.log("Día: " + dia);
    console.log("Total consumido hasta ahora: " + totalCroquetas + " porciones de croquetas.");
}
console.log("Total consumido: " + totalCroquetas + " porciones");

console.log("Promedio de baños en la peluquería de Belki");
let totalBanos = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let banos = dia * 5 + 5;
    totalBanos += banos;
    console.log("Día " + dia + ": " + banos + " mascotas bañadas.");
}
console.log("Total de mascotas bañadas: " + totalBanos);
console.log("Promedio de baños por día: " + (totalBanos / dias).toFixed(2));

console.log("Jaulas de hospitalización");
let libres = 0;
let ocupadas = 0;
for (let jaula = 1; jaula <= 10; jaula++) {
    if (jaula % 2 === 0) {
        console.log("Jaula " + jaula + " está ocupada.");
        ocupadas++;
    } else {
        console.log("Jaula " + jaula + " está libre.");
        libres++;
    }
}
console.log("Total de jaulas libres: " + libres);
console.log("Total de jaulas ocupadas: " + ocupadas);

console.log("Vacunas aplicadas por la Dra. Nicole");
let vacunas = [35, 60, 45, 80, 70, 90, 55];
let total = 0;
let diasExitosos = 0;
for (let i = 0; i < vacunas.length; i++) {
    total += vacunas[i];
    console.log("Día " + (i + 1) + ": " + vacunas[i] + " vacunas aplicadas.");
    if (vacunas[i] >= 50) {
        diasExitosos++;
    } else {
        console.log("Día " + (i + 1) + " no fue exitoso, se aplicaron menos de 50 vacunas.");
    }
}
console.log("Total de vacunas aplicadas: " + total);
console.log("Número de días exitosos: " + diasExitosos);

console.log("Recorrer Pacientes con for ... of");
const pacientes = ["Max", "Michi", "Luna", "Rocky", "Toby"];
for (let paciente of pacientes) {
    console.log("Paciente: " + paciente);
}

let clinica = {
    nombre: "Patitas Felices",
    consultorios: 3,
    horario: "8:00 a 20:00",
    equipo: ["Dra. Nicole", "Dr. Romeo", "Belki"]
};

console.log("Recorrer Propiedades de la Clínica con for ... in");
for (let propiedad in clinica) {
    console.log(propiedad + ": " + clinica[propiedad]);
}

console.log("Recorrer el Equipo de la Clínica con for ... of");
for (let integrante of clinica["equipo"]) {
    console.log("- " + integrante);
}

let campanas = [
    { nombre: "Campaña 1", atendidos: 90, meta: 100, responsable: "Dra. Nicole" },
    { nombre: "Campaña 2", atendidos: 80, meta: 100, responsable: "Dr. Romeo" },
    { nombre: "Campaña 3", atendidos: 95, meta: 100, responsable: "Belki" }
];

let exitosas = 0;
for (let campana of campanas) {
    let porcentaje = (campana.atendidos / campana.meta) * 100;
    console.log(campana.nombre + " realizada por " + campana.responsable + " con un " + porcentaje.toFixed(2) + "%");
    if (porcentaje >= 90) {
        exitosas++;
    } else {
        console.log(campana.nombre + " no fue exitosa, se atendió a menos del 90% de la meta.");
    }
}
console.log("Número de campañas exitosas: " + exitosas);

console.log("Uso de break y continue en un ciclo for");

// 1) break: detiene el ciclo por completo
for (let turno = 1; turno <= 10; turno++) {
    if (turno === 5) {
        console.log("Llegó el turno 5, la Dra. Nicole sale a almorzar y se detiene la atención");
        break;
    }
    console.log("Atendiendo el turno:", turno);
}

// 2) continue: salta a la siguiente vuelta
for (let turno = 1; turno <= 10; turno++) {
    if (turno % 2 === 0) {
        console.log("Turno par, ese paciente no vino, se continúa con el siguiente");
        continue;
    }
    console.log("Atendiendo el turno impar:", turno);
}

// 3) break y continue juntos
for (let turno = 1; turno <= 10; turno++) {
    if (turno === 7) {
        console.log("Llegó el turno 7, se cierra la clínica");
        break;
    }
    if (turno % 2 === 0) {
        console.log("Turno par, ese paciente no vino, se continúa con el siguiente");
        continue;
    }
    console.log("Atendiendo el turno impar:", turno);
}
