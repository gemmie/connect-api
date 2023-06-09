import nock from 'nock';
import revolutTransactions from './revolut-tx.json';
import monzoTransactions from './monzo-tx.json';
import sterlingTransactions from './sterling-tx.json';
import { BankEndpoint } from './types';

const bankEndpoints: BankEndpoint[] = [
    { name: 'revolut', transactionsResponse: revolutTransactions },
    { name: 'monzo', transactionsResponse: monzoTransactions },
    { name: 'sterling', transactionsResponse: sterlingTransactions },
];
export const mockBankApiPersist = () => {
    bankEndpoints.forEach(({ name, transactionsResponse }) => {
        nock('https://mock-api.com')
            .persist()
            .get(`/api/${name}`)
            .reply(200, transactionsResponse);
    });
};
export const mockBankApi = () => {
    bankEndpoints.forEach(({ name, transactionsResponse }) => {
        nock('https://mock-api.com')
            .get(`/api/${name}`)
            .reply(200, transactionsResponse);
    });
};

export const mockRevolutApi = () => {
    nock('https://mock-api.com')
        .get(`/api/revolut`)
        .reply(200, revolutTransactions);
};
