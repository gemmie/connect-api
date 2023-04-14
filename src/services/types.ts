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
