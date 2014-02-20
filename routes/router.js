var http = require('http'),
    fs = require('fs'),
    async = require('async'),
    pg = require('pg'),
    mysql = require('mysql'),
    credentials = require('./credentials');

/* MySQL Placeholder
var connection = mysql.createConnection(credentials.mysql);
connection.connect(function(error) {
  if (error) {
    throw error;
  } 
});

// Query syntax
connection.query(sql, params, function(error, result) {
  if (error) {
    throw error;
  }
  response.json(result);
});

*/

/* Postgres placeholder
var client = new pg.Client(credentials.postgres);

// Connect to postgres
client.connect();

// Query syntax
client.query(sql, params , function(err, result) {
  res.json(result.rows);
});

*/

// Route for root
exports.root = function(req, res) {
  res.render('index');
}