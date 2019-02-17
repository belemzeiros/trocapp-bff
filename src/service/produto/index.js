const produtoRepository = require('../../repository/produto');

const listarProdutos = async () => await produtoRepository.listarProdutos();

const criarProduto = produto => {
  const objetoProduto = JSON.parse(produto);
  const isTitle = Object.keys(objetoProduto).includes('title');

  if (isTitle) {
    return produtoRepository.criarProduto(objetoProduto);
  }

  return {
    mensagem: 'Título não informado!'
  };

};

const atualizarProduto = produto => {
  const objetoProduto = JSON.parse(produto);
  return produtoRepository.atualizarProduto(objetoProduto);
};

const apagarProduto = produtoId => produtoRepository.apagarProduto(produtoId);

module.exports = {
  listarProdutos,
  criarProduto,
  atualizarProduto,
  apagarProduto,
};
