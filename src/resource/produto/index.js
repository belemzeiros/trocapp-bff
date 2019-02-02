const express = require('express');

const router = express.Router();

const produtos = [
  {
    id: 1,
    title: 'Item vindo da api',
    description: 'Descrição do Item 1',
    image: 'sofa.jpg',
  },
  {
    id: 2,
    title: 'Item 2',
    description: 'Descrição do Item 2',
    image: 'sofa.jpg',
  },
  {
    id: 3,
    title: 'Item 3',
    description: 'Descrição do Item 3',
    image: 'sofa.jpg',
  },
  {
    id: 4,
    title: 'Item 4',
    description: 'Descrição do Item 4',
    image: 'sofa.jpg',
  },
  {
    id: 5,
    title: 'Item 5',
    description: 'Descrição do Item 5',
    image: 'sofa.jpg',
  },
  {
    id: 6,
    title: 'Item 6',
    description: 'Descrição do Item 6',
    image: 'sofa.jpg',
  },
  {
    id: 7,
    title: 'Item 7',
    description: 'Descrição do Item 7',
    image: 'sofa.jpg',
  },
  {
    id: 8,
    title: 'Item 8',
    description: 'Descrição do Item 8',
    image: 'sofa.jpg',
  },
];

router.use(function(req, res, next) {
  console.log(`Chamada ${req.method} Produtos: HEADERS ${JSON.stringify(req.headers)} - BODY ${JSON.stringify(req.body)}`);
  next();
});

router.get('/produtos', (req, res) => {
  res.json(produtos);
});

router.post('/produtos', (req, res) => {
  res.send('Resposta POST Produto')
});

router.put('/produtos', (req, res) => {
  res.send('Resposta PUT Produto')
});

router.delete('/produtos', (req, res) => {
  res.send('Resposta DELETE Produto')
});

module.exports = router;