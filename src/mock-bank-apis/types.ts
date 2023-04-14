interface RevolutTransactionAmount {
    value: string;
    currency: string;
}

interface RevolutTransactionCounterparty {
    id: string;
    name: string;
}

export interface RevolutTransaction {
    id: string;
    created_at: string;
    completed_at: string;
    state: string;
    amount: RevolutTransactionAmount;
    merchant: string | null;
    counterparty: RevolutTransactionCounterparty;
    reference: string;
}

interface MonzoTransactionMetadata {
    reference: string;
}
export interface MonzoTransaction {
    id: string;
    created: string;
    description: string;
    amount: number;
    currency: string;
    metadata: MonzoTransactionMetadata;
}

export interface SterlingTransaction {
    id: string;
    currency: string;
    amount: string;
    direction: string;
    narrative: string;
    created: string;
    reference: string;
}

export type RevolutTransactionResponse = RevolutTransaction[];
export type MonzoTransactionResponse = MonzoTransaction[];
export type SterlingTransactionResponse = SterlingTransaction[];
export interface BankEndpoint {
    name: string;
    transactionsResponse:
        | RevolutTransactionResponse
        | MonzoTransactionResponse
        | SterlingTransactionResponse;
}
