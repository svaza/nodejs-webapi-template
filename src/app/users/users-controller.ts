import * as express from 'express';

interface UserInfo {
    userName: string;
}

export class RouteConfig {
    static registerRoutes(): express.Router {
        const router: express.Router = express.Router();

        router.get('/', (req, res) => {
            res.send(UserController.getUserInfo(req.query['userName'] as string));
        });

        return router;
    }
}

export class UserController {

    static getUserInfo(userName: string): UserInfo {
        return {
            userName: `${userName}`
        }
    }


}