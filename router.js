function route(pathname, handle, response, productId) {
  if (typeof handle[pathname] === "function") {
    if (pathname.includes(".png")) {
      const color = pathname.split("/").slice(-1)[0].split("Racket.png")[0];
      handle[pathname](response, color);
    } else if (pathname.includes("order")) {
      handle[pathname](response, productId);
    } else {
      handle[pathname](response);
    }
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write("Not Found");
    response.end();
  }
}

exports.route = route;
