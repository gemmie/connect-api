import { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (
    error,
    req,
    res,
    next
): void => {
    const errorBody = {
        error: error.name || 'API error',
        message: error.message || 'Something went wrong',
    };

    res.status(error.status || 500).json(errorBody);
};
