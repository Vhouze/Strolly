var mysql = require('mysql');

var mysqlHost = process.env.MYSQL_HOST || 'eu-cdbr-west-01.cleardb.com';
var mysqlPort = process.env.MYSQL_PORT || '3306';
var mysqlUser =process.env.MYSQL_USER || 'bbaf924bbece0a';
var mysqlPass = process.env.MYSQL_PASS || '9d618fb7';
var mysqlDB = process.env.MYSQL_DB || 'heroku_9d04589f58e21d7';

var connection_options = {
  host: mysqlHost,
  port: mysqlPort,
  user: mysqlUser,
  password: mysqlPass,
  database: mysqlDB
};

module.exports = {

  sqlQueryOptions: function(sqlString, options, noResultHandling = false) {
    return new Promise(function(resolve, reject) {
      let con = mysql.createConnection(connection_options);
      con.connect(function(err) {
        if (err) return reject(err);
        let data = con.query(sqlString, options, function(error, results) {
          if (error) return reject(error);
          else if (noResultHandling && results.length === 0) reject("No results");
          con.end();
          return resolve(results);
        });
      })
    });
  },

  sqlQuery: function (sqlString, noResultHandling = false) {
    return new Promise(function(resolve, reject) {
      let con = mysql.createConnection(connection_options);
      con.connect(function(err) {
        if (err) return reject(err);
        let data = con.query(sqlString, function(error, results) {
          if (error) return reject(error);
          else if (noResultHandling && results.length === 0) reject("No results");
          con.end();
          return resolve(results);
        });
      });

    });
  }
}
