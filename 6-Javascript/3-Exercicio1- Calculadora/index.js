let numero1 = parseFloat(prompt("Insira o primeiro número:"));
let numero2 = parseFloat(prompt("Insira o segundo número:"));

console.log("Resultados: ");
console.log("Soma: " + (numero1 + numero2));
console.log("Subtração: " + (numero1 - numero2));
console.log("Multiplicação: " + numero1 * numero2);
console.log("Divisão: " + numero1 / numero2);

alert(
  "Resultados:\n" +
    "\nSoma: " +
    (numero1 + numero2) +
    "\nSubtração: " +
    (numero1 - numero2) +
    "\nMultiplicação: " +
    numero1 * numero2 +
    "\nDivisão: " +
    numero1 / numero2
);
