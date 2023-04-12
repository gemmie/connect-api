import {
    NextFunction,
    RequestHandler,
    Response,
    Request,
    Express,
} from 'express';
import { transactionGetRoutes } from './transaction/get';
import { Route } from './types';
import { validationResult } from 'express-validator';

export const registerRoutes = (app: Express) => {
    const transactionRoutes = [...transactionGetRoutes];

    transactionRoutes.forEach((route: Route) => {
        const { method, path, callback, validations = [] } = route;

        app[method](
            path,
            validations,
            withErrorHandling(validateRequest),
            withErrorHandling(callback)
        );
    });
};

const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // throw new ValidationError(JSON.stringify(errors.array()));
        throw new Error(JSON.stringify(errors.array()));
    }

    return next();
};
const withErrorHandling = (callback: RequestHandler) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await callback(req, res, next);
        } catch (error) {
            next(error);
        }
    };
};
