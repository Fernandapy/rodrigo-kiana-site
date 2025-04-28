
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/confirmar', (req, res) => {
    const data = `Nome: ${req.body.nome}, Email: ${req.body.email}, Presença: ${req.body.presenca}\n`;
    fs.appendFileSync('backend/confirmacoes.txt', data);
    res.send('<h1>Obrigado pela confirmação!</h1><a href="/">Voltar</a>');
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
