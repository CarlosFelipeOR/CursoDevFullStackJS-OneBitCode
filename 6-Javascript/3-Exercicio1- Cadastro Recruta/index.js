const primeiroNome = prompt("Primeiro Nome:");
const sobrenome = prompt("Sobrenome:");
const campoEstudo = prompt("Campo de estudo:");
const anoNascimento = prompt("Ano nascimento:");

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " +
    primeiroNome +
    " " +
    sobrenome +
    "\nCampo de Estudo: " +
    campoEstudo +
    "\nIdade: " +
    (2022 - anoNascimento)
);
