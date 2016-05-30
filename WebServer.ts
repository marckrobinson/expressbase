import * as express from 'express';
import * as bodyParser from 'body-parser';

export module WebServer {

    export enum RouteType {
        GET,
        PUT,
        POST,
        DELETE
    }

    export class Server {
        app = express();
        constructor(publicdir: string = 'public') {
            // Static files go in publicdir
            this.app.use(express.static(publicdir));
            this.app.use(bodyParser.urlencoded({ extended: false }));
            this.app.use(bodyParser.json());
        }
        public getApp() {
            return this.app;
        }
        public listen(port: number) {
            this.app.listen(port, () => {
                console.log(`Server listening on port ${port}!`);
            });
        }
        public route(type: RouteType, path: string, callback: express.Handler) {
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
}
