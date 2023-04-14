import { ValidationChain } from 'express-validator';
import { RequestHandler } from 'express';

export type Method = 'get' | 'post' | 'patch' | 'put' | 'delete';

export interface Route {
    path: string;
    validations?: ValidationChain[];
    method: Method;
    callback: RequestHandler;
}
