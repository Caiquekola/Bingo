const mysql = require('mysql2');

// Criar conexão ao banco de dados
const connection = mysql.createConnection({
  host: 'localhost',    // Endereço do servidor MySQL
  user: 'root',         // Usuário do MySQL
  password: 'root',// Senha do MySQL
  database: 'bingo' // Nome do banco de dados
});

// Conectar ao banco
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL: ', err);
    return;
  }
  console.log('Conectado ao MySQL com sucesso!');
});

// Fechar a conexão (Opcional)
connection.end();
