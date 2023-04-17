import { RequestHandler } from 'express';
import { ValidationChain } from 'express-validator';

export type Method = 'get' | 'post' | 'patch' | 'put' | 'delete';

export interface Route {
    path: string;
    validations?: ValidationChain[];
    method: Method;
    callback: RequestHandler;
}
