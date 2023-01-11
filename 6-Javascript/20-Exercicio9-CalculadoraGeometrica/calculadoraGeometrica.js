function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function areaRetangulo(base, altura) {
  return base * altura;
}

function areaQuadrado(lado) {
  return areaRetangulo(lado, lado);
}

function areaTrapezio(baseMaior, baseMenor, altura) {
  return ((baseMaior + baseMenor) * altura) / 2;
}

function areaCirculo(raio) {
  return Math.PI * raio * raio;
}

let opcao = "";
do {
  opcao = prompt(
    "Calculadora Geométrica\n" +
      "Aqui voce pode calcular a área de várias formas geométricas.\n\n" +
      "Selecione uma opção:\n" +
      "1- Área Triângulo\n" +
      "2- Área Retângulo\n" +
      "3- Área Quadrado\n" +
      "4- Área Trapézio\n" +
      "5- Área Circulo\n" +
      "6- Sair"
  );
  let altura = 0;
  let base = 0;
  switch (opcao) {
    case "1":
      altura = parseFloat(prompt("Qual é a altura do triângulo? (cm)"));
      base = parseFloat(prompt("Qual é a base do triângulo? (cm)"));
      alert("A área desse triângulo é " + areaTriangulo(base, altura) + "cm²");
      break;
    case "2":
      altura = parseFloat(prompt("Qual é a altura do retângulo? (cm)"));
      base = parseFloat(prompt("Qual é a base do retângulo? (cm)"));
      alert("A área desse retângulo é " + areaRetangulo(base, altura) + "cm²");
      break;
    case "3":
      base = parseFloat(prompt("Qual é o lado do quadrado? (cm)"));
      alert("A área desse quadrado é " + areaQuadrado(base) + "cm²");
      break;
    case "4":
      altura = parseFloat(prompt("Qual é a altura do trapézio? (cm)"));
      const baseMaior = parseFloat(
        prompt("Qual é a base maior do trapézio? (cm)")
      );
      const baseMenor = parseFloat(
        prompt("Qual é a base menordo trapézio? (cm)")
      );
      alert(
        "A área desse trapézio é " +
          areaTrapezio(baseMaior, baseMenor, altura) +
          "cm²"
      );
      break;
    case "5":
      base = parseFloat(prompt("Qual é o raio do circulo? (cm)"));
      alert("A área desse circulo é " + areaCirculo(base) + "cm²");
      break;
    case "6":
      alert("Encerrando sistema");
      break;
    default:
      alert("Opção Inválida");
      break;
  }
} while (opcao != "6");
