const cors = require('cors');
const express = require('express')
const app = express();

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*"); 
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');

    res.header("Access-Control-Allow-Headers", 'Content-Type')
    app.use(cors());
    next();
});

/* ROUTES */
app.use('/',  require('./routes/health'));
app.use('/review', require('./routes/reviewRoute'));

module.exports = app;