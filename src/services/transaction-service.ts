import { unifySterlingTransactions } from './sterling-transaction-service';
import { unifyRevolutTransactions } from './revolut-transaction-service';
import { unifyMonzoTransactions } from './monzo-transaction-service';
import { BankConfiguration } from './types';

const config: BankConfiguration[] = [
    {
        name: 'sterling',
        officialName: 'Sterling Bank',
        unificationHandler: unifySterlingTransactions,
    },
    {
        name: 'revolut',
        officialName: 'Revolut',
        unificationHandler: unifyRevolutTransactions,
    },
    {
        name: 'monzo',
        officialName: 'Monzo',
        unificationHandler: unifyMonzoTransactions,
    },
];

export const getUnifiedTransactions = async (source = '') => {
    const unifiedTransactionsByBank = await Promise.all(
        config
            .filter((bank) => (source ? bank.name === source : true))
            .map(({ officialName, unificationHandler }) =>
                unificationHandler(officialName)
            )
    );

    const unifiedTransactions = unifiedTransactionsByBank.reduce(
        (transactions, acc) => [...acc, ...transactions],
        []
    );

    return unifiedTransactions;
};
