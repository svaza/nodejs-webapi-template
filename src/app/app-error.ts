import * as express from 'express';

export enum ErrorSubcode {
    SomethingGotFailed = 1,
    UserNameWasNotRight = 2
}

export interface ErrorResponse {
    statusCode: number;
    subCode: ErrorSubcode;
    debugMessage: string;
}

export class AppError extends Error {
    constructor(public message: string, public subcode: ErrorSubcode, public httpStatus: number) {
        super(message);
    }

    getErrorResponse(): ErrorResponse {
        return {
            debugMessage: this.message,
            statusCode: this.httpStatus,
            subCode: this.subcode
        };
    }

}

export function appErrorHandler(err: Error, req: express.Request, res: express.Response, next) {
    if (err instanceof AppError) {
        res.status((err as AppError).httpStatus);
        res.json((err as AppError).getErrorResponse());
    } else {
        res.status(500);
    }
}