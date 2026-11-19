const peso = document.getElementById("peso");
const dosis = document.getElementById("dosis");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
calcular.addEventListener("click", function() {
  if (peso.value.trim() === ""
    || dosis.value.trim() === "") {
    resultado.textContent = "Completa ambos campos";
    return;
  }

  const pesoNumber = Number(peso.value);
  const dosisNumber = Number(dosis.value);
  if (!Number.isFinite(pesoNumber) ||
    !Number.isFinite(dosisNumber)) {
    resultado.textContent = "Ingrese valores válidos";
    return;
  }

  const total = pesoNumber * dosisNumber;
  resultado.textContent = "Dosis total: " + total + " mg";
});
