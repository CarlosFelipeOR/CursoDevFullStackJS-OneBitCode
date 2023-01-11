const idade = prompt("informe sua idade");

if (idade >= 18) {
  console.log("Você é maior de idade");
} else if (idade > 12) {
  console.log("Você é menor de idade");
} else if (idade > 4) {
  alert("Você é criança");
} else {
  alert("Você é bebê");
}

const resultado = 6 === 6 ? "Verdadeiro" : "Falso";
console.log(resultado);
