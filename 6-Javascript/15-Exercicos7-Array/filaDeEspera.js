const pacientes = [];

let filaEspera = "";
let opcaoEscolhida = "";

while (opcaoEscolhida !== "3") {
  filaEspera = "";
  for (let i = 0; i < pacientes.length; i++) {
    filaEspera += `\n${i + 1}º ${pacientes[i]}`;
  }

  opcaoEscolhida = prompt(`Fila de espera: ${filaEspera}
  
  Opções Menu:
  1-Adicionar paciente
  2-Consultar paciente
  3-Sair`);

  switch (opcaoEscolhida) {
    case "1":
      pacientes.push(prompt("Informe o nome do paciente:"));
      break;
    case "2":
      const consultado = pacientes.shift();
      if (consultado) {
        alert(`O paciente ${consultado} entrou na consulta`);
      } else {
        alert("Não tem nenhum paciente na fila de espera");
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
