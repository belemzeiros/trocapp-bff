const express = require('express');
const bodyParser = require('body-parser');

const produtoResource = require('./resource/produto/');

const app = express();

// para traduzir application/json
app.use(bodyParser.json());
// para traduzir application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// Produto Recurso
app.use(produtoResource);

// Endpoints
// API REST (HTTP)
// Contrato: Endereço, Método, Cabeçalho, Corpo, Resposta, etc
// Obter Dados: GET
app.get('/', (req, res) => res.send('API Olá Mundo!'));

app.listen(3001, () => console.log('API rodando em http://localhost:3001'));