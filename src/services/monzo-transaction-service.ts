import { MonzoTransaction } from '../mock-bank-apis/types';
import { UnifiedTransaction } from './types';
import { isDebitOrCredit } from './utlis';
import { getMonzoTransactions } from '../core/bank-api/monzo';

const normalizeMonzoAmount = (amount: number) => {
    const normalizedAmountNumber = amount / 100;

    return normalizedAmountNumber.toFixed(2);
};
const unifyMonzoSingleTransaction = (
    officialName: string,
    monzoTransaction: MonzoTransaction
): UnifiedTransaction => {
    const unifiedAmount = normalizeMonzoAmount(monzoTransaction.amount);

    return {
        id: monzoTransaction.id,
        created: monzoTransaction.created,
        description: monzoTransaction.description,
        amount: {
            value: unifiedAmount,
            currency: monzoTransaction.currency,
        },
        type: isDebitOrCredit(unifiedAmount),
        reference: monzoTransaction.metadata.reference,
        metadata: {
            source: officialName,
        },
    };
};

export const unifyMonzoTransactions = async (
    officialName: string
): Promise<UnifiedTransaction[]> => {
    const monzoTransactions = await getMonzoTransactions();

    return monzoTransactions.map((transaction) =>
        unifyMonzoSingleTransaction(officialName, transaction)
    );
};
