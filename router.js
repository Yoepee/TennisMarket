function route(pathname, handle, response, productId) {
  if (typeof handle[pathname] === "function") {
    if (pathname.includes(".png")) {
      const color = pathname.split("/").slice(-1)[0].split("Racket.png")[0];
      handle[pathname](response, color);
    } else {
      handle[pathname](response, productId);
    }
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write("Not Found");
    response.end();
  }
}

exports.route = route;
