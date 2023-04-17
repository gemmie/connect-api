import { getSterlingTransactions } from '../core/bank-api/sterling';
import { isDebitOrCredit } from './utlis';
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
        type: isDebitOrCredit(sterlingTransaction.amount),
        reference: sterlingTransaction.reference,
        metadata: {
            source: officialName,
        },
    };
};

export const unifySterlingTransactions = async (
    officialName: string
): Promise<UnifiedTransaction[]> => {
    const sterlingTransactions = await getSterlingTransactions();

    return sterlingTransactions.map((transaction) =>
        unifySterlingSingleTransaction(officialName, transaction)
    );
};
