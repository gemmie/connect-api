import { getRevolutTransactions } from '../core/bank-api/revolut';
import { isDebitOrCredit, isStringifiedNumberNegative } from './utlis';
import { RevolutTransaction } from '../mock-bank-apis/types';
import { UnifiedTransaction } from './types';

const unifyRevolutSingleTransaction = (
    officialName: string,
    revolutTransaction: RevolutTransaction
): UnifiedTransaction => {
    return {
        id: revolutTransaction.id,
        created: revolutTransaction.created_at,
        description: `Payment ${
            isStringifiedNumberNegative(revolutTransaction.amount.value)
                ? 'to'
                : 'from'
        }: ${revolutTransaction.counterparty.name}`,
        amount: revolutTransaction.amount,
        type: isDebitOrCredit(revolutTransaction.amount.value),
        reference: revolutTransaction.reference,
        metadata: {
            source: officialName,
        },
    };
};

export const unifyRevolutTransactions = async (
    officialName: string
): Promise<UnifiedTransaction[]> => {
    const revolutTransactions = await getRevolutTransactions();

    return revolutTransactions.map((transaction) =>
        unifyRevolutSingleTransaction(officialName, transaction)
    );
};
