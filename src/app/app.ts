import * as createError from 'http-errors';
import * as express from 'express';
import * as path from 'path';
import * as cookieParser from 'cookie-parser';
import * as logger from 'morgan';
import { RouteConfig as HomeRouteConfig } from './home/home-controller';
import { RouteConfig as UserRouteConfig } from './users/users-controller';
import { appErrorHandler } from './app-error';

export const app: express.Application = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', HomeRouteConfig.registerRoutes());
app.use('/users', UserRouteConfig.registerRoutes());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(appErrorHandler);