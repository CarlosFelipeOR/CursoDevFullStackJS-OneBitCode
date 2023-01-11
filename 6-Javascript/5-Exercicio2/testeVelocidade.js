const carro1 = prompt("Nome do primeiro carro");
const velocidade1 = parseFloat(prompt("Velocidade do primeiro carro"));

const carro2 = prompt("Nome do segundo carro");
const velocidade2 = parseFloat(prompt("Velocidade do segundo carro"));

if (velocidade1 > velocidade2) {
  alert(`O ${carro1} é mais rápido`);
} else if (velocidade1 < velocidade2) {
  alert(`O ${carro2} é mais rápido`);
} else {
  alert("Os carros possuem a mesma velocidade");
}
