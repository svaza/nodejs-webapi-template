import * as express from 'express';
import { DefaultMessageResponseModel } from './models';



export class RouteConfig {
    static registerRoutes(): express.Router {
        const router: express.Router = express.Router();

        router.get('/', (req, res) => {
            res.send(HomeController.getDefaultMessage(req.query['name'] as string));
        });

        return router;
    }
}

class HomeController {

    static getDefaultMessage(userName: string): DefaultMessageResponseModel {
        return {
            message: `Welcome Home ${userName}`
        }
    }

}