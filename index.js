function printRoutes(basePath, layer) {
  if (layer.route) {
    // If the layer has a route property, iterate over its stack and print routes
    layer.route.stack.forEach((stackLayer) => {
      printRoutes(basePath + layer.route.path, stackLayer);
    });
  } else if (layer.name === "router" && layer.handle.stack) {
    // If the layer is a router, iterate over its stack and print routes
    layer.handle.stack.forEach((stackLayer) => {
      printRoutes(
        basePath +
          (layer.regexp
            ? splitPath(layer.regexp).filter(Boolean).join("/")
            : ""),
        stackLayer
      );
    });
  } else if (layer.method) {
    // If the layer has a method property, print the route details
    console.log(
      `| ${layer.method.toUpperCase()}\t | ${basePath}${splitPath(layer.regexp)
        .filter(Boolean)
        .join("/")}`
    );
    console.log("----------------------------------------");
  }
}

function splitPath(thing) {
  if (typeof thing === "string") {
    // If the route is a string, split it with / and return an array
    return thing.split("/");
  } else if (thing.fast_slash) {
    // For catch-all routes, return an empty string
    return "";
  } else {
    // For regex routes, parse the regex and return an array
    const match = thing
      .toString()
      .replace("\\/?", "")
      .replace("(?=\\/|$)", "$")
      .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//);
    return match
      ? match[1].replace(/\\(.)/g, "$1").split("/")
      : `<complex:${thing.toString()}>`;
  }
}

function getallroutes(app) {
  const stack = app._router.stack;
  console.log("----------------------------------------");
  stack.forEach((layer) => {
    printRoutes("", layer);
  });
}

module.exports = {
  getallroutes,
};
