const nomePersonagem1 = prompt("Insira o nome do personagem que irá atacar");
const poderAtaque = parseFloat(
  prompt(`Insira o poder de ataque do ${nomePersonagem1}`)
);

const nomePersonagem2 = prompt("Insira o nome do personagem que irá defender");
const poderDefesa = parseFloat(
  prompt(`Insira o poder de defesa do ${nomePersonagem2}`)
);
let pontosVida = parseFloat(
  prompt(`Insira a quantidade de vida do ${nomePersonagem2}`)
);
const escudo = confirm(`O ${nomePersonagem2} possui escudo?`);

let dano = 0;

if (poderAtaque > poderDefesa && !escudo) {
  dano = poderAtaque - poderDefesa;
} else if (poderAtaque > poderDefesa && escudo) {
  dano = (poderAtaque - poderDefesa) / 2;
}

pontosVida -= dano;

alert(`O dano causado por ${nomePersonagem1} em ${nomePersonagem2} foi de ${dano},
portanto a vida restante de ${nomePersonagem2} é de ${pontosVida}`);
