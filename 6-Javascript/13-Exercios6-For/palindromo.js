const palavra = prompt("Insira uma palavra:").toUpperCase();

let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

if (palavra === palavraInvertida) {
  alert(`${palavra} é um palíndromo`);
} else {
  alert(
    `${palavra} nao é um palíndromo pois essa palavra invertida é ${palavraInvertida}`
  );
}
