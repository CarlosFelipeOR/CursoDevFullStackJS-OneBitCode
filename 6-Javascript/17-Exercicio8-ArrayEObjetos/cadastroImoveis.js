const cadastros = [];

let opcao = "";

do {
  opcao = prompt(`Cadastro de imóveis:
Quantidade de imóveis cadastrados: ${cadastros.length}

Selecione uma opção:
1- Salvar um novo imóvel
2- Mostrar todos imóveis cadastrados
3- Sair`);

  switch (opcao) {
    case "1":
      const imovel = {
        nomeProprietário: prompt(
          "Salvar um novo imóvel:\n\nInsira o nome do proprietário:"
        ),
        quantQuartos: prompt(
          "Salvar um novo imóvel:\n\nInsira a quantidade de quartos:"
        ),
        quantBanheiros: prompt(
          "Salvar um novo imóvel:\n\nInsira a quantidade de banheiros:"
        ),
        garagem: false,
      };
      let garagemOpcao = "";
      do {
        garagemOpcao = prompt(
          "Salvar um novo imóvel:\n\nPossui garagem?\n1-Sim\n2-Não"
        );

        if (garagemOpcao == "1") {
          imovel.garagem = true;
        } else if (garagemOpcao == "2") {
          imovel.garagem = false;
        } else {
          alert("Opção Inválida");
        }
      } while (garagemOpcao != "1" && garagemOpcao != "2");

      cadastros.push(imovel);
      alert("Imóvel salvo com sucesso");
      break;
    case "2":
      let todosImoveis = "";
      for (let i = 0; i < cadastros.length; i++) {
        todosImoveis +=
          `Imovel ${i + 1}:\n` +
          `Proprietário: ${cadastros[i].nomeProprietário}\n` +
          `Quantidade de quartos: ${cadastros[i].quantQuartos}\n` +
          `Quantidade de banheiros: ${cadastros[i].quantBanheiros}\n` +
          `Possui garagem: ${cadastros[i].garagem ? "Sim" : "Não"}\n\n`;
      }

      if (cadastros.length === 0) {
        todosImoveis = "Nenhum imóvel Cadastrado";
      }

      alert("Imóveis cadastrados: \n\n" + todosImoveis);

      break;
    case "3":
      alert("Encerrando aplicação...");
      break;

    default:
      alert("Opção inválida");
      break;
  }
} while (opcao != "3");
