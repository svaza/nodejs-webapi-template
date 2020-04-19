import * as express from 'express';
import { DefaultMessageResponseModel } from './models';
import { AppError, ErrorSubcode } from '../app-error';



export class RouteConfig {
    static registerRoutes(): express.Router {
        const router: express.Router = express.Router();

        router.get('/', (req, res) => {
            res.json(HomeController.getDefaultMessage(req.query['name'] as string));
        });

        return router;
    }
}

class HomeController {

    static getDefaultMessage(userName: string): DefaultMessageResponseModel {
        if (userName === 'sa') {
            throw new AppError('username was not right', ErrorSubcode.UserNameWasNotRight, 400);
        }
        return {
            message: `Welcome to Home ${userName}`
        }
    }

}