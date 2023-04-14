import { httpClient } from '../http/http-client';
import { MonzoTransactionResponse } from '../../mock-bank-apis/types';
import { AxiosResponse } from 'axios';

export const getMonzoTransactions =
    async (): Promise<MonzoTransactionResponse> => {
        return await httpClient
            .get('https://mock-api.com/api/revolut')
            .then(
                (response: AxiosResponse<MonzoTransactionResponse>) =>
                    response.data
            );
    };
