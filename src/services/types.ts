export interface BankConfiguration {
    name: string;
    officialName: string;
    unificationHandler: (officialName: string) => Promise<UnifiedTransaction[]>;
}

interface UnifiedTransactionAmount {
    value: string;
    currency: string;
}

interface UnifiedTransactionMetadata {
    source: string;
}

export interface UnifiedTransaction {
    id: string;
    created: string;
    description: string;
    amount: UnifiedTransactionAmount;
    type: 'DEBIT' | 'CREDIT';
    reference: string;
    metadata: UnifiedTransactionMetadata;
}
