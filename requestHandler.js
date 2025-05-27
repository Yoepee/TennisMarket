const mariadb = require("./database/connect/mariadb");

const fs = require("fs");
const main_view = fs.readFileSync("./main.html", "utf-8");

function main(response) {
  mariadb.query("SELECT * FROM product", function (err, rows) {
    console.log(rows);
  });

  response.writeHead(200, { "Content-Type": "text/html" });
  response.write(main_view);
  response.end();
}

function login(response) {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("login");
  response.end();
}

function getRacket(response, color) {
  fs.readFile(`./img/${color}Racket.png`, function (err, data) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    response.end();
  });
}

function getCss(response) {
  fs.readFile(`./main.css`, function (err, data) {
    response.writeHead(200, { "Content-Type": "text/css" });
    response.write(data);
    response.end();
  });
}

function order(response, productId) {
  const date = new Date();

  mariadb.query(
    `INSERT INTO orderlist VALUES ("${productId}", "${date.toLocaleDateString()}" )`,
    function (err, rows) {
      console.log(rows);
    }
  );
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("order page");
  response.end();
}

let handle = {};
handle["/"] = main;
handle["/login"] = login;
handle["/order"] = order;

/**
 * image directory
 */
handle["/main.css"] = getCss;
handle["/img/redRacket.png"] = getRacket;
handle["/img/blueRacket.png"] = getRacket;
handle["/img/blackRacket.png"] = getRacket;

exports.handle = handle;
