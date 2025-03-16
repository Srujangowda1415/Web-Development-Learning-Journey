const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', // Change if using a remote database
  user: 'root',
  password: 'NewStrongPassword',
  database: 'auth',
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL!');
});

module.exports = connection;
