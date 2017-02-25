import {Server,RouteType} from "./WebServer";

const port = process.env.port || 3000;
const server = new Server(['public','node_modules/bootstrap']);

server.route(RouteType.GET,"/hw", (req, res) => {
    res.send('<h1>Hello World GET Controller</h1><a href="/">Back to home</a>');    
});

server.route(RouteType.POST,"/hw", (req, res) => {
    console.log("PUT called:",req.body);
    req.body.serverValue = "This is from the POST!";
    res.end(JSON.stringify(req.body));        
});

server.route(RouteType.GET,"/diagnostics", (req, res) => {
    let diags = {
        arch: process.arch,
        platform: process.platform,
        title: process.title,
        uptime: process.uptime(),
        versions: process.versions
    };
    res.end(JSON.stringify(diags));        
});

server.listen(port);
