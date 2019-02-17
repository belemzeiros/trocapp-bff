const mysqlDS = require('../../datasource/mysql');

const produtoRepository = {
  listarProdutos: async () => {
    const results = await mysqlDS.execute('SELECT * FROM produtos;');
    console.log(JSON.stringify(results));
    return results;
  },
  criarProduto: produto => {
    return `ProdutoRepository.criarProduto: ${produto.title}`;
  },
  atualizarProduto: produto => {
    return `ProdutoRepository.atualizarProduto: ${produto.title}`;
  },
  apagarProduto: produtoId => `ProdutoRepository.apagarProduto: ${produtoId}`,
};

module.exports = produtoRepository;
