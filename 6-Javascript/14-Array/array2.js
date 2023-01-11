const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];

//1-Adicionar elementos:
//1.1-push: Adiciona elemento no final
arr.push("Boromir", "Boromir");
console.log(arr);

//1.2-unshift: Adiciona elemento no inicio
let tamanhoArray = arr.unshift("Boromir");
console.log(arr);
console.log(tamanhoArray);

//2-Remover Elemnento
//2.1- pop: Remove elemento do final do array e retorna o elemento removido
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

//2.2 Shift: Remove elemento do inicio do array e retorna o elemento removido
ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

//3-Pesquisar elemento
//3.1- includes: verifica se existe o elemento e retorna True ou false
const inclui = arr.includes("Gandalf");
console.log(inclui);

//3.2-indexOf: pesquisa o elemento e retorna o indice do elemento encontrado
const indice = arr.indexOf("Gandalf");
console.log(indice);

//4-Cortar e concatenar
//4.1 - Slice: copiar parte do array
const hobbits = arr.slice(0, 4); //copia do elemento 0 até antes do 4 (4 não incluso)
const outros = arr.slice(-4); // quando negativo conta o elemento de trás pra frente, e o final é opcional
console.log(arr);
console.log(hobbits);

//4.2-concat: concatenar dois arrays
const sociedade = hobbits.concat(outros, "Gandalf");
console.log(sociedade);

//5-Substituição de elementos
//5.1- Splice
const elementosRemovidos = sociedade.splice(4, 1, "Gandalf, o Cinzento"); //Na posição 4 será excluido 1 elemento quee será substituido 'Gandalf, o Cinzento'
console.log(sociedade);
console.log(elementosRemovidos);

//6-Iterar sobre os elementos
for (let i = 0; i < sociedade.length; i++) {
  const elemento = sociedade[i];
  console.log(elemento + " se encontra na posicação " + i);
}
