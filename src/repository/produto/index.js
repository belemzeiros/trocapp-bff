const mysqlDS = require('../../datasource/mysql');

const listarProdutos = async () => await mysqlDS.execute('SELECT * FROM produtos');

const criarProduto = async produto => {
  try {
    const results = await mysqlDS.execute('INSERT INTO produtos SET ?', produto);
    if (results.insertId > 0) {
      return `Produto inserido com ID: ${results.insertId}`;
    }
    return 'Falha ao criar produto!';
  } catch (e) {
    console.error(e.message);
    return 'Falha ao criar produto!';
  }
};

const atualizarProduto = async produto => {
  try {
    const columns = [];
    const values = [];
    const keys = Object.keys(produto);

    keys.forEach(key => {
      if (key !== 'produtoId') {
        columns.push(`${key} = ?`);
        values.push(produto[key]);
      }
    });

    const query = `
      UPDATE produtos
      SET ${columns.join(', ')}
      WHERE produtoId = ?
    `;

    // values.push(produto.produtoId) OU [...values, produto.produtoId]

    const results = await mysqlDS.execute(query, [...values, produto.produtoId]);

    if (results.changedRows > 0) {
      return `Produto alterado com sucesso!`;
    }
    return 'Falha ao alterar o produto!';
  } catch (e) {
    console.error(e.message);
    return 'Falha ao alterar o produto!';
  }
};

const apagarProduto = async produtoId  => {
  try {
    const results = await mysqlDS.execute('DELETE FROM produtos WHERE produtoId = ?', [produtoId]);
    if (results.affectedRows > 0) {
      return 'Produto removido com sucesso!';
    }
    return 'Falha ao remover produto!';
  } catch (e) {
    console.error(e.message);
    return 'Falha ao remover produto!';
  }
};

module.exports = {
  listarProdutos,
  criarProduto,
  atualizarProduto,
  apagarProduto,
};
