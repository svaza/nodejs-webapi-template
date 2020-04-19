import * as express from 'express';
import { UserInfoResponseModel } from './models';



export class RouteConfig {
    static registerRoutes(): express.Router {
        const router: express.Router = express.Router();

        router.get('/', (req, res) => {
            res.send(UserController.getUserInfo(req.query['userName'] as string));
        });

        return router;
    }
}

class UserController {

    static getUserInfo(userName: string): UserInfoResponseModel {
        return {
            userName: `${userName}`
        }
    }


}