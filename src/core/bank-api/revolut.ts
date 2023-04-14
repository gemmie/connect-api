import { httpClient } from '../core/http/httpClient';
import { RevolutTransactionResponse } from '../mock-bank-apis/types';
import { AxiosResponse } from 'axios';

export const getRevolutTransactions =
    async (): Promise<RevolutTransactionResponse> => {
        return await httpClient
            .get('https://mock-api.com/api/revolut')
            .then(
                (response: AxiosResponse<RevolutTransactionResponse>) =>
                    response.data
            );
    };
