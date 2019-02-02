const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// para traduzir application/json
app.use(bodyParser.json());
// para traduzir application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

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

// Endpoints
// API REST (HTTP)
// Contrato: Endereço, Método, Cabeçalho, Corpo, Resposta, etc
// Obter Dados: GET
app.get('/', (req, res) => res.send('API Olá Mundo!'));

app.get('/produtos', (req, res) => {
  console.log('Requisição na API de Produtos');
  res.json(produtos);
});

app.post('/produtos', (req, res) => {
  // Chamar ProdutoServico
  console.log(`Chamada POST Produtos - HEADERS ${JSON.stringify(req.headers)} - BODY ${JSON.stringify(req.body)}`);
  res.send('Resposta POST Produto')
});

app.put('/produtos', (req, res) => {
  // Chamar ProdutoServico
  console.log(`Chamada PUT Produtos: HEADERS ${JSON.stringify(req.headers)} - BODY ${JSON.stringify(req.body)}`);
  res.send('Resposta PUT Produto')
});

app.delete('/produtos', (req, res) => {
  // Chamar ProdutoServico
  console.log(`Chamada DELETE Produtos: HEADERS ${JSON.stringify(req.headers)} - BODY ${JSON.stringify(req.body)}`);
  res.send('Resposta DELETE Produto')
});

app.listen(3001, () => console.log('API rodando em http://localhost:3001'));