const http = require("http");
const url = require("url");

function start(route, handle, db) {
  function onRequest(request, response) {
    let pathname = url.parse(request.url).pathname;
    let queryData = url.parse(request.url, true).query;

    route(pathname, handle, response, queryData.productId);
  }

  http.createServer(onRequest).listen(8888);
}

exports.start = start;
