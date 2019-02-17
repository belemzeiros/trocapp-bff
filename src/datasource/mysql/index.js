const mysql = require('mysql');

const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;

const open = () => mysql.createConnection({
  host     : MYSQL_HOST,
  user     : MYSQL_USER,
  password : MYSQL_PASSWORD,
  database : MYSQL_DATABASE
});

const execute = async query => {
  return new Promise((resolve, reject) => {
    const connection = open();
    connection.connect();
    connection.query(query, (error, results, fields) => {
      if (error) {
        connection.end();
        console.error(error);
        reject([])
      }

      connection.end();
      return resolve(results);
    });
  });
};

module.exports = {
  execute,
}
