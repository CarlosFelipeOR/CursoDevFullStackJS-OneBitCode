let pessoa = {
  nome: "Carlos",
  idade: 27,
  dizerOla() {
    console.log("Olá, mundo! Meu nome é " + this.nome);
  },
};

pessoa.dizerOla();
