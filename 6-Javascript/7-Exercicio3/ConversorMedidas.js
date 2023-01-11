const medidaMetros = parseFloat(prompt("Insira o valor da medida em metros:"));
const unMedidaConversao = prompt(`Deseja converter para qual unidade medida? 
(Digite apenas a sigla. Ex: "mm")

Mílimetro (mm)
Centímetro(cm)
Decímetro(dm)
Decâmetro(dam)
hectômetro(hm)
Quilômetro(km)

`);
let opcaoInvalida = false;

let medidaCovertida = 0;

switch (unMedidaConversao) {
  case "mm":
    medidaCovertida = medidaMetros * 1000;
    break;
  case "cm":
    medidaCovertida = medidaMetros * 100;
    break;
  case "dm":
    medidaCovertida = medidaMetros * 10;
    break;
  case "dam":
    medidaCovertida = medidaMetros / 10;
    break;
  case "hm":
    medidaCovertida = medidaMetros / 100;
    break;
  case "km":
    medidaCovertida = medidaMetros / 1000;
    break;
  default:
    opcaoInvalida = true;
    alert("Opção inválida");
    break;
}

if (!opcaoInvalida) {
  alert(
    `${medidaMetros} m é equivalente a ${medidaCovertida} ${unMedidaConversao}`
  );
}
