# TROCAPP BFF

Uma plataforma online para trocas e doações. Este é o Backend For Frontend desenvolvido para ser uma API na camada de middleware.

## Requisitos

Você precisará das seguintes coisas corretamente instaladas no seu computador.

- [Git](http://git-scm.com/) v2+
- [Node.js](http://nodejs.org/) v10.9+ (with NPM v6.4+)
- [Yarn](https://yarnpkg.com) v1.9+

## Instalação

- Clonar o repositório: `git clone git@github.com:belemzeiros/trocapp-bff.git`
- Entrar no repositório: `cd trocapp-bff`
- Instalar as dependências do projeto: `yarn install`

## Iniciar a aplicação

- `yarn start` inicia a aplicação na porta 3001

## Testes

- `yarn test` Executa e exporta a cobertura de testes com Jest para ambiente de produção
- `yarn test:dev` Executa os testes com Jest e observa alterações para ambiente de desenvolvimento

## Boas práticas

- `yarn eslint:ci` Executa e exporta a cobertura de boas práticas com ESLint para ambiente de produção
- `yarn eslint:dev` Executa, exporta a cobertura e observa alterações com ESLint para ambiente de desenvolvimento. O ESLint tentará corrigir os erros automaticamente.

## MySQL como Container do Docker

O [MySQL](https://dev.mysql.com/doc/) é um sistema de gerenciamento de banco de dados (SGBD), que utiliza a linguagem SQL (Linguagem de Consulta Estruturada, do inglês Structured Query Language) como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation, com mais de 10 milhões de instalações pelo mundo.

Um [Container](https://www.docker.com/resources/what-container) é uma unidade padrão de software que empacota o código e todas as suas dependências para que o aplicativo seja executado de maneira rápida e confiável de um ambiente de computação para outro.

O [Docker](https://www.docker.com/why-docker) fornece uma maneira de executar aplicativos isolados de forma segura em um contêiner, empacotados com todas as suas dependências e bibliotecas.

Instale o Docker para [Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows), [Mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac) ou [Linux](https://docs.docker.com/install/linux/docker-ce/ubuntu/).


Para baixar a imagem do MySQL execute o comando abaixo:
```
docker pull mysql
```

Em seguida, para iniciar o MySQL Server execute o comando abaixo. Será definida a senha do usuário `root` como `Belemzeiros2018`, bem como será criado uma base de dados chamada `trocapp` e também um usuário e senha com o mesmo valor.

```
docker run -p 3306:3306 --name mysql8 -e MYSQL_ROOT_PASSWORD=Belemzeiros2018 -e MYSQL_ROOT_HOST=% -e MYSQL_USER=trocapp -e MYSQL_PASSWORD=trocapp -e MYSQL_DATABASE=trocapp -d mysql:latest
```

Para configurar uma conexão com o MySQL utilize os dados abaixo:
```
Host: localhost
Port: 3606
Database: trocapp
User: trocapp
Password: trocapp
```
Caso receba o erro [Public Key Retrieval is not allowed](https://stackoverflow.com/questions/50379839/connnection-java-mysql-public-key-retrieval-is-not-allowed)  ao tentar se conectar, adicione as seguintes configurações no seu driver de conexão:
```
allowPublicKeyRetrieval=true
useSSL=false
```
Mais informações na [documentação](https://mysql-net.github.io/MySqlConnector/connection-options/).

## Leitura adicional

- [NodeJS](https://nodejs.org/dist/latest-v10.x/docs/api/) para executar JavaScript no lado do servidor
- [ExpressJS](http://expressjs.com/) Framework para NodeJS
- [Jest](https://github.com/facebook/jest) para testes unitários unit tests
- [ESLint](https://eslint.org/) para boas práticas de desenvolvimento baseado no [guia de estilo](https://github.com/airbnb/javascript) do AirBnB para JavaScript
- [ES6 Class](https://translate.google.com/translate?sl=en&tl=pt&u=https%3A//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) Classes em JavaScript
