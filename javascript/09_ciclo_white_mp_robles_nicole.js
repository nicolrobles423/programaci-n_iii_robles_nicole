console.log("Abriendo consultorios de Patitas Felices...");
let consultorio = 1;
while (consultorio <= 5) {
    console.log("Abriendo consultorio:", consultorio);
    consultorio++;
}
console.log("Todos los consultorios abiertos. ¡Listos para atender!");

console.log("Cuenta regresiva para la cirugía de Rocky");
let i = 10;
while (i >= 0) {
    console.log("Faltan " + i + " minutos para la cirugía");
    i--;
}

console.log("Hidratar a Luna con suero");
let hidratacion = 50;
let dosis = 10;
let totalDosis = 0;
while (hidratacion < 100) {
    hidratacion += dosis;
    totalDosis++;
    console.log("Aplicando suero... Nivel de hidratación:", hidratacion, "%");
}
console.log("Luna está completamente hidratada después de", totalDosis, "dosis.");

console.log("Consumo de champú en la peluquería de Belki");
let champu = 100;
let consumo = 45;
let banos = 0;
while (champu >= consumo) {
    champu -= consumo;
    banos++;
    console.log("Baño", banos, "realizado. Champú restante:", champu, "%");
    if (champu < 50) {
        console.log("Advertencia: Champú bajo. Nivel actual:", champu, "%");
    }
}
console.log("No hay suficiente champú para otro baño. Total de baños realizados:", banos);

console.log("Aplicar la anestesia del Dr. Romeo con Do ... While");
let anestesia = 50;
do {
    console.log("Aplicando dosis de anestesia. Anestesia disponible:", anestesia, "ml");
    anestesia -= 15;
} while (anestesia > 0);
console.log("No hay suficiente anestesia para otra dosis. Anestesia restante:", anestesia, "ml");

console.log("Comprar un equipo de rayos X para la clínica");
let ahorro = 80;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;
do {
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana", semanas, "Ahorro actual:", ahorro, "soles");
} while (ahorro < meta);
console.log("Meta alcanzada después de", semanas, "semanas. Ahorro total:", ahorro, "soles");
