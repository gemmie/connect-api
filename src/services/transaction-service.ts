import { getSterlingTransactions } from '../core/bank-api/sterling';
import { SterlingTransaction } from '../mock-bank-apis/types';
import { UnifiedTransaction } from './types';

const unifySterlingSingleTransaction = (
    officialName: string,
    sterlingTransaction: SterlingTransaction
): UnifiedTransaction => {
    return {
        id: sterlingTransaction.id,
        created: sterlingTransaction.created,
        description: sterlingTransaction.narrative,
        amount: {
            value: sterlingTransaction.amount,
            currency: sterlingTransaction.currency,
        },
        type: sterlingTransaction.amount.startsWith('-') ? 'DEBIT' : 'CREDIT',
        reference: sterlingTransaction.reference,
        metadata: {
            source: officialName,
        },
    };
};

const unifySterlingTransactions = async (
    officialName: string
): Promise<UnifiedTransaction[]> => {
    const sterlingTransactions = await getSterlingTransactions();

    return sterlingTransactions.map((transaction) =>
        unifySterlingSingleTransaction(officialName, transaction)
    );
};

const config = [
    {
        name: 'sterling',
        officialName: 'Sterling Bank',
        handler: unifySterlingTransactions,
    },
];

export const getUnifiedTransactions = async (source = '') => {
    const unifiedTransactionsByBank = await Promise.all(
        config
            .filter((bank) => (source ? bank.name === source : true))
            .map(({ officialName, handler }) => handler(officialName))
    );

    const unifiedTransactions = unifiedTransactionsByBank.reduce(
        (transactions, acc) => [...acc, ...transactions],
        []
    );

    console.log(unifiedTransactions);

    return unifiedTransactions;
};
