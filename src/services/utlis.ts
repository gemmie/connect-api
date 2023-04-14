export const isStringifiedNumberNegative = (amount: string) =>
    amount.startsWith('-');

export const isDebitOrCredit = (amount: string) =>
    isStringifiedNumberNegative(amount) ? 'DEBIT' : 'CREDIT';
