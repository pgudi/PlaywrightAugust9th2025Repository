const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'sgtesting'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    process.exit(1);
  }
  console.log('Connected to MySQL database.');

  connection.query('SELECT * FROM dept', (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      process.exit(1);
    }
    console.log('Records from dept table:');
    console.table(results);
    connection.end();
  });
});
