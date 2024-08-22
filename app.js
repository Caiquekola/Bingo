const express = require('express');
const path = require('path');
const app = express();

// Servindo os arquivos estáticos
app.use(express.static(path.join(__dirname)));


// Configurando o servidor para rodar na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});


