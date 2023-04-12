interface RevolutTransactionAmount {
    value: string;
    currency: string;
}

interface RevolutTransactionCounterparty {
    id: string;
    name: string;
}

export interface RevolutTransactionResponse {
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
export interface MonzoTransactionResponse {
    id: string;
    created: string;
    description: string;
    amount: number;
    currency: string;
    metadata: MonzoTransactionMetadata;
}

export interface SterlingTransactionResponse {
    id: string;
    currency: string;
    amount: string;
    direction: string;
    narrative: string;
    created: string;
    reference: string;
}
export interface BankEndpoint {
    name: string;
    transactionsResponse:
        | RevolutTransactionResponse[]
        | MonzoTransactionResponse[]
        | SterlingTransactionResponse[];
}
