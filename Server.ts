import { WebServer } from "./webserver";

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

server.listen(port);
