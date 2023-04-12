import { Request, Response } from 'express';
import { Route } from '../types';
import { query } from 'express-validator';

const getTransactions = (req: Request, res: Response) => {
    res.json([]);
};
export const transactionGetRoutes: Route[] = [
    {
        path: '/transactions',
        method: 'get',
        validations: [
            query(
                'source',
                'If specified, should be one of [revolut, sterling, monzo]'
            )
                .if((source: string) => !!source)
                .isIn(['revolut', 'sterling', 'monzo']),
        ],
        callback: getTransactions,
    },
];
