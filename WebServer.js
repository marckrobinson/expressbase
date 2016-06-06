"use strict";
const express = require('express');
const bodyParser = require('body-parser');
var WebServer;
(function (WebServer) {
    (function (RouteType) {
        RouteType[RouteType["GET"] = 0] = "GET";
        RouteType[RouteType["PUT"] = 1] = "PUT";
        RouteType[RouteType["POST"] = 2] = "POST";
        RouteType[RouteType["DELETE"] = 3] = "DELETE";
    })(WebServer.RouteType || (WebServer.RouteType = {}));
    var RouteType = WebServer.RouteType;
    class Server {
        constructor(publicdir = 'public') {
            this.app = express();
            // Static files go in publicdir
            this.app.use(express.static(publicdir));
            this.app.use(bodyParser.urlencoded({ extended: false }));
            this.app.use(bodyParser.json());
        }
        getApp() {
            return this.app;
        }
        listen(port) {
            this.app.listen(port, () => {
                console.log(`Server listening on port ${port}!`);
            });
        }
        route(type, path, callback) {
            switch (type) {
                case RouteType.GET:
                    console.log("Adding GET target: " + path);
                    this.app.get(path, callback);
                    break;
                case RouteType.PUT:
                    console.log("Adding PUT target: " + path);
                    this.app.put(path, callback);
                    break;
                case RouteType.POST:
                    console.log("Adding POST target: " + path);
                    this.app.post(path, callback);
                    break;
                case RouteType.DELETE:
                    console.log("Adding DELETE target: " + path);
                    this.app.delete(path, callback);
                    break;
            }
        }
    }
    WebServer.Server = Server;
})(WebServer = exports.WebServer || (exports.WebServer = {}));
//# sourceMappingURL=WebServer.js.map