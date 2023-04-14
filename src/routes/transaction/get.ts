import { Request, Response } from 'express';
import { Route } from '../types';
import { query } from 'express-validator';
import { getUnifiedTransactions } from '../../services/transaction-service';

const getTransactions = async (req: Request, res: Response) => {
    const source = (req.query.source as string) || '';

    const transactions = await getUnifiedTransactions(source);

    res.json(transactions);
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
