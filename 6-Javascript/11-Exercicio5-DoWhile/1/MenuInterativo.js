let opcao = "";

do {
  opcao = prompt(
    `Escolha uma das opções:

  1.
  2.
  3.
  4.
  5. Encerrar
  `
  );

  alert(`A opção escolhida foi ${opcao}`);
} while (opcao !== "5");

alert("O Sistema está sendo encerrado");
