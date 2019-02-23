const produtoRepository = require('../../repository/produto');

const listarProdutos = async () => await produtoRepository.listarProdutos();

const criarProduto = async produto => {
  const objetoProduto = JSON.parse(produto);
  const isTitle = Object.keys(objetoProduto).includes('title');

  if (isTitle) {
    return await produtoRepository.criarProduto(objetoProduto);
  }

  return {
    mensagem: 'Título não informado!'
  };

};

const atualizarProduto = async produto => {
  const objetoProduto = JSON.parse(produto);
  const isProdutoId = Object.keys(objetoProduto).includes('produtoId');

  if (isProdutoId && objetoProduto.produtoId > 0) {
    return await produtoRepository.atualizarProduto(objetoProduto);
  }

  return {
    mensagem: 'Atributo "produtoId" é obrigatório!'
  }

};

const apagarProduto = async produtoId => {
  if (produtoId > 0) {
    return await produtoRepository.apagarProduto(produtoId);
  }

  return {
    mensagem: 'Atributo "produtoId" é obrigatório!'
  }
};

module.exports = {
  listarProdutos,
  criarProduto,
  atualizarProduto,
  apagarProduto,
};
