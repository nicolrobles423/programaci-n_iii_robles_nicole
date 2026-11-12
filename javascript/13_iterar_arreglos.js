let cristales = [30, 50, 70, 40];
let posicion = 2;
let nuevaEnergia = 100;
for (let i = 0; i < cristales.length; i++) {
  console.log("Posicion ", i);
  console.log("Cristal: ", cristales[i]);
  if (posicion >= 0 && posicion < cristales.length) {
    cristales[posicion] = nuevaEnergia;
  } else {
    console.log("Posicion no válida");
  }
}
console.log(cristales);

let personajes = [
  { id: 1, nombre: "Rick", energia: 99, edad: 70 },
  { id: 2, nombre: "Morty", energia: 80, edad: 14 },
  { id: 3, nombre: "Francisco", energia: 100, edad: 52 },
]
for (let personaje of personajes) {
  console.log("ID:", personaje.id);
  console.log("Nombre:", personaje.nombre);
  console.log("Energía:", personaje["energia"]);
  console.log("Edad:", personaje["edad"]);
}

 console.log("Rick organiza sus misiones");
misiones = [
  {
    piloto: "Rick",
    cristales: [30, 50, 60]
  },
  {
    piloto: "Morty",
    cristales: [20, 30, 30]
  },
  {
    piloto: "Summer",
    cristales: [90, 80, 70]
  }
];
totalCristales = 0;
for (let mision of misiones) {
    totalCristales = 0;
    console.log("Piloto: ", mision.piloto);
    for (let cristal of mision.cristales) {
        console.log("Cristale recolectados ", cristal);
        totalCristales += cristal;
    }
    console.log("Total de cristales recolectados por", mision.piloto, ":", totalCristales);
}

let cristaelsOriginales = [30, 50, 70, 40];
let critalesDobles = cristaelsOriginales.map(elemento=>{
    return elemento * 2;
});
console.log(critalesDobles);
let validos = cristalesOriginales.filter(crital=>crista>=50);
let resulrado = cristalesOriginales.reduce((acumulador, elemento)=>{
    return acumulador + elemento;
});