
const express = require('express');
const routes = require('./routes');

//Serve para instanciar o objeto e já iniciar tudo
require('./database/index');

const app = express();

// Tem que vir primeiro, para o express saber que pode trabalhar com json
app.use(express.json());
app.use(routes);


app.listen(3333); 

