const express = require('express');
const produtoService = require('../../service/produto');

const router = express.Router();

router.use(function(req, res, next) {
  console.log(`Chamada ${req.method} Produtos: HEADERS ${JSON.stringify(req.headers)} - BODY ${JSON.stringify(req.body)}`);
  next();
});

router.get('/produtos', (req, res) => {
  res.json(produtoService.listarProdutos());
});

router.post('/produtos', (req, res) => {
  res.send(produtoService.criarProduto(req.body.produto))
});

router.put('/produtos', (req, res) => {
  res.send(produtoService.atualizarProduto(req.body.produto));
});

router.delete('/produtos', (req, res) => {
  res.send(produtoService.apagarProduto(req.body.produtoId));
});

module.exports = router;
