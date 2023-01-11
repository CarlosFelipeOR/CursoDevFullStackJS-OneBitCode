const turista = prompt("Digite seu nome:");
let visitas = prompt("Você já visitou outra cidade? sim/nao");
let cidades = [];
let quantCidades = 0;

while (visitas === "sim") {
  cidades.push(prompt("Qual cidade você visitou?"));
  quantCidades++;
  visitas = prompt("Você também visitou outra cidade? sim/nao");
}

alert(`O ${turista} visitou ${quantCidades} cidades.

As cidades são: 
${cidades}`);
