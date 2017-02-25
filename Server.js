"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WebServer_1 = require("./WebServer");
var port = process.env.port || 3000;
var server = new WebServer_1.Server(['public', 'node_modules/bootstrap']);
server.route(WebServer_1.RouteType.GET, "/hw", function (req, res) {
    res.send('<h1>Hello World GET Controller</h1><a href="/">Back to home</a>');
});
server.route(WebServer_1.RouteType.POST, "/hw", function (req, res) {
    console.log("PUT called:", req.body);
    req.body.serverValue = "This is from the POST!";
    res.end(JSON.stringify(req.body));
});
server.route(WebServer_1.RouteType.GET, "/diagnostics", function (req, res) {
    var diags = {
        arch: process.arch,
        platform: process.platform,
        title: process.title,
        uptime: process.uptime(),
        versions: process.versions
    };
    res.end(JSON.stringify(diags));
});
server.listen(port);
//# sourceMappingURL=Server.js.map