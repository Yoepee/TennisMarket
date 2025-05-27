const server = require("./server");
const router = require("./router");
const requestHandler = require("./requestHandler");

const mariadb = require("./database/connect/mariadb");
mariadb.connect();

server.start(router.route, requestHandler.handle);
