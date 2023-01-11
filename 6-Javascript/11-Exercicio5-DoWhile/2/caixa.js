let caixa = parseFloat(prompt("Quantos reais você tem no caixa?"));
let operacao = "";
do {
  operacao = prompt(`Você tem R$${caixa} em caixa. O que você deseja fazer?
  1-Sacar
  2-Depositar
  3-Sair`);

  switch (operacao) {
    case "1":
      const saque = parseFloat(prompt("Quanto você deseja sacar?"));
      caixa -= saque;
      break;
    case "2":
      const deposito = parseFloat(prompt("Quanto você deseja depositar?"));
      caixa += deposito;
      break;
      break;
    case "3":
      break;
    default:
      alert("Opção inválida");
      break;
  }
} while (operacao !== "3");

alert("O sistema está sendo encerrado!");
