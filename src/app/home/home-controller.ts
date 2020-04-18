import * as express from 'express';

interface DefaultMessage {
    message: string;
}

export class RouteConfig {
    static registerRoutes(): express.Router {
        const router: express.Router = express.Router();

        router.get('/', (req, res) => {
            res.send(HomeController.getDefaultMessage(req.query['name'] as string));
        });

        return router;
    }
}

export class HomeController {

    static getDefaultMessage(userName: string): DefaultMessage {
        return {
            message: `Welcome Home ${userName}`
        }
    }

}