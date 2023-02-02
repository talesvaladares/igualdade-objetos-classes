const produto1 = {
  nome: 'caneta',
  preco: 1,
  caracteristicas: {
    tamanho: 'media',
    cor: 'azul'
  }
}

const produto2 = {
  nome: 'caneta',
  preco: 1,
  caracteristicas: {
    tamanho: 'media',
    cor: 'vermelha'
  }
}

console.log(JSON.stringify(produto1) === JSON.stringify(produto2));