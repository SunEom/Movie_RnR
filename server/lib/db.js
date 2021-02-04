const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'psm',
  password: '111111',
  database: 'movie_rnr',
});
db.connect();
module.exports = db;
