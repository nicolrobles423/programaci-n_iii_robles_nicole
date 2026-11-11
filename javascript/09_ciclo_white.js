console.log("Abriendo portal de la nave...");
let portal = 1;
while (portal <= 5) {
    console.log("Abriendo portal:", portal);
    portal++;
}
console.log("Todos los portales abiertos. ¡Listos para despegar!");

console.log("Cuenta regresiva despegue de la nave Morthy");
let i = 10;
while (i >= 0) {
    console.log("Faltan " + i + " segundos para el despegue");
    i--;
}

console.log("Recargar la pista de portales de Rick");
let energia = 50;
let recarga = 10;
let totalRecargas = 0;
while (energia < 100) {
    energia += recarga;
    totalRecargas++;
    console.log("Recargando... Nivel de energía:", energia, "%");
}
console.log("Pista de portales completamente recargada después de", totalRecargas, "recargas.");

console.log("Consumo de combustible de la nave de Rick");
let combustible = 100;
let consumo = 45;
let viajes = 0;
while (combustible >= consumo) {
    combustible -= consumo;
    viajes++;
    console.log("Viaje", viajes, "realizado. Combustible restante:", combustible, "%");
    if (combustible < 50) {
        console.log("Advertencia: Combustible bajo. Nivel actual:", combustible, "%");
    }
}
console.log("No hay suficiente combustible para otro viaje. Total de viajes realizados:", viajes);

console.log("Activar portales de dimensiones peligrosas con Do ... While");
let energiaPortal = 50;
do {
    console.log("Activando portal de dimensión peligrosa. Nivel de energía:", energiaPortal, "%");
    energiaPortal -= 15;
} while (energiaPortal > 0);
console.log("No hay suficiente energía para activar más portales. Nivel de energía actual:", energiaPortal, "%");

console.log("Comprar una pistola de portales para Rick");
let ahorro = 80;
let meta = 500;
let ahorroSemanal = 70;
let semanas = 0;
do {
    ahorro += ahorroSemanal;
    semanas++;
    console.log("Semana", semanas, "Ahorro actual:", ahorro, "unidades");
} while (ahorro < meta);

console.log("Meta alcanzada después de" + semanas + "semanas. Rick puede comprar la pistola de portales:", ahorro, "unidades");
let cristales =[5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
let objetivo = 150;
let energiaTotal = 0;
let indice = 0;
while(indice < cristales.length) {
  let cristal = cristales[indice];
  energiaTotal += cristal;
  indice++;
  if (cristal < 20) {
    console.log("Cristal " + cristal);
    continue;
  }

  energiaTotal += cristal;
  console.log("Cristal " + cristal + " agregado. Energía total: " + energiaTotal);
  if (energiaTotal >= objetivo) {
    console.log("Objetivo de energía alcanzado con cristales.");
    break;
  }

}
console.log("Energía total acumulada: " + energiaTotal);

