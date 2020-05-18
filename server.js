// Importando Dependências
const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

// Iniciando o App
const app = express();

// Envia formato json para minha app
app.use(express.json());

// Libera acesso para outros dominios
app.use(cors());

// Iniciando o DB com os Esquemas
mongoose.connect('mongodb://localhost:27017/nodeapi',
    { useUnifiedTopology: true, useNewUrlParser: true });
requireDir('./src/models');

// Prefixo e Importando routes.js
app.use('/api', require("./src/routes"));

// Definindo Porta localhost
app.listen(3001);