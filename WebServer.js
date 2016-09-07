var express = require('express');
var body_parser_1 = require('body-parser');
var RouteType;
(function (RouteType) {
    RouteType[RouteType["GET"] = 0] = "GET";
    RouteType[RouteType["PUT"] = 1] = "PUT";
    RouteType[RouteType["POST"] = 2] = "POST";
    RouteType[RouteType["DELETE"] = 3] = "DELETE";
})(RouteType || (RouteType = {}));
exports.RouteType = RouteType;
var Server = (function () {
    function Server(publicdir) {
        var _this = this;
        if (publicdir === void 0) { publicdir = ['public']; }
        this.app = express();
        // Static files go in publicdir
        publicdir.forEach(function (path) {
            _this.app.use(express.static(path));
        });
        this.app.use(body_parser_1.urlencoded({ extended: false }));
        this.app.use(body_parser_1.json());
    }
    Server.prototype.getApp = function () {
        return this.app;
    };
    Server.prototype.listen = function (port) {
        this.app.listen(port, function () {
            console.log("Server listening on port " + port + "!");
        });
    };
    Server.prototype.route = function (type, path, callback) {
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
    };
    return Server;
})();
exports.Server = Server;
//# sourceMappingURL=WebServer.js.map