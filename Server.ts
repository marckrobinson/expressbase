import { WebServer } from "./WebServer";

const port = process.env.port || 3000;
const server = new WebServer.Server('public');

server.route(WebServer.RouteType.GET,"/hw", (req, res) => {
    res.send('<h1>Hello World GET Controller</h1><a href="/">Back to home</a>');    
});

server.route(WebServer.RouteType.POST,"/hw", (req, res) => {
    console.log("PUT called:",req.body);
    req.body.serverValue = "This is from the POST!";
    res.end(JSON.stringify(req.body));        
});

server.route(WebServer.RouteType.GET,"/diagnostics", (req, res) => {
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
