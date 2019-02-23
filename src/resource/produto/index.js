const express = require('express');
const produtoService = require('../../service/produto');

const router = express.Router();

router.use(function(req, res, next) {
  console.log(`Chamada ${req.method} Produtos: HEADERS ${JSON.stringify(req.headers)} - BODY ${JSON.stringify(req.body)}`);
  next();
});

router.get('/produtos', async (req, res) => {
  res.json(await produtoService.listarProdutos());
});

router.post('/produtos', async (req, res) => {
  res.json(await produtoService.criarProduto(req.body.produto))
});

router.put('/produtos', async (req, res) => {
  res.json(await produtoService.atualizarProduto(req.body.produto));
});

router.delete('/produtos', async (req, res) => {
  res.json(await produtoService.apagarProduto(req.body.produtoId));
});

module.exports = router;
