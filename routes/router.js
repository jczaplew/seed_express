var http = require('http'),
    fs = require('fs'),
    async = require('async');

// Route for root
exports.root = function(req, res) {
  res.render('index');
}