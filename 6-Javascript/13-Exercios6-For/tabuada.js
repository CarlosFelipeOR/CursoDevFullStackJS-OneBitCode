const numero = parseFloat(prompt("Deseja calcular a tabuada de qual número?"));
let resultado = 0;
let resultadoString = "";

for (let i = 1; i <= 20; i++) {
  resultado = numero * i;
  resultadoString += `${numero} x ${i} = ${resultado} \n`;
}

alert(resultadoString);
