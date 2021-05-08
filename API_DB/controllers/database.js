var mysql = require('mysql');

var mysqlHost = process.env.MYSQL_HOST || 'db';
var mysqlPort = process.env.MYSQL_PORT || '3308';
var mysqlUser =process.env.MYSQL_USER || 'admin';
var mysqlPass = process.env.MYSQL_PASS || 'admin';
var mysqlDB = process.env.MYSQL_DB || 'strolly';

var connection_options = {
  host: mysqlHost,
  port: mysqlPort,
  user: mysqlUser,
  password: mysqlPass,
  database: mysqlDB
};

var con = mysql.createConnection(connection_options);

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = {

  sqlQueryOptions: function(sqlString, options, noResultHandling = false) {
    return new Promise(function(resolve, reject) {
      let data = con.query(sqlString, options, function(error, results) {
        if (error) return reject(error);
        else if (noResultHandling && results.length === 0) reject("No results");
        return resolve(results);
      });
    });
  },

  sqlQuery: function (sqlString, noResultHandling = false) {
    return new Promise(function(resolve, reject) {
      let data = con.query(sqlString, function(error, results) {
        if (error) return reject(error);
        else if (noResultHandling && results.length === 0) reject("No results");
        return resolve(results);
      });
    });
  }
}
