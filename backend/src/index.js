const express = require('express');
const cors = require('cors')
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/*
                AULA 02 - 59:26
                
                    ESTUDOS 
                Métodos HTTP
    GET: BUSCAR UMA INFORMAÇÃO DO BACK-END
    POST: CRIAR UMA INFORMAÇÃO NO BACK-END
    PUT: ALTERAR UMA INFORMAÇÃO NO BACK-END
    DELETE: DELETAR UMA INFORMAÇÃO NO BACK-END

    Tipos de parâmetros: 

    Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, Paginação)
    Route Params: Parâmetros utilizados para identificar recursos
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

    SQL: MySQL, SQLite, PostgreSQL, Oracle, 
    NoSQL: MongoDB, CouchDB, etc

    Banco Usado na Aplicação: knex

    Driver: select * from users
    Query Builder: table('users').select('*')

 */
