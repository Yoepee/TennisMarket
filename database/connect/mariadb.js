const mariadb = require("mysql");

const connect = mariadb.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "Tennis",
});

module.exports = connect;
