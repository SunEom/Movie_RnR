// var mysql = require('mysql');
// var db = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'psm',
//     password : '111111',
//     database : 'movie_rnr'
//   });
//   db.connect();
//   module.exports = db;

var mysql = require('mysql');
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'xodid0701',
  database: 'movie_rnr',
});
db.connect();
module.exports = db;
