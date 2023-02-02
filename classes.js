class Produto {
  nome;
  preco;

  constructor(nome, preco) {
    this.nome = nome
    this.preco = preco;
  }
}

const p1 = new Produto('caneta', 1);
const p2 = new Produto('caneta', 2);

console.log(JSON.stringify(p1) === JSON.stringify(p2))