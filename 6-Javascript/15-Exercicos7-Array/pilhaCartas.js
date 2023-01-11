const cartas = [];

let pilhaCartas = "";
let opcaoEscolhida = "";

while (opcaoEscolhida !== "3") {
  pilhaCartas = "";
  for (let i = 0; i < cartas.length; i++) {
    pilhaCartas += `\n${i + 1} - ${cartas[i]}`;
  }

  opcaoEscolhida = prompt(`Cartas no baralho: ${pilhaCartas}
  
  Opções Menu:
  1-Adicionar uma carta
  2-Puxar uma carta
  3-Sair`);

  switch (opcaoEscolhida) {
    case "1":
      cartas.unshift(prompt("Informe a carta adicionada:"));
      break;
    case "2":
      const cartaPuxada = cartas.shift();
      if (cartaPuxada) {
        alert(`A carta ${cartaPuxada} foi puxada do baralho`);
      } else {
        alert("Não tem nenhuma carta no baralho");
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida");
      break;
  }
}
