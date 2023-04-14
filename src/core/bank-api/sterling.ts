import { httpClient } from '../core/http/httpClient';
import { SterlingTransactionResponse } from '../mock-bank-apis/types';
import { AxiosResponse } from 'axios';

export const getSterlingTransactions =
    async (): Promise<SterlingTransactionResponse> => {
        return await httpClient
            .get('https://mock-api.com/api/sterling')
            .then(
                (response: AxiosResponse<SterlingTransactionResponse>) =>
                    response.data
            );
    };
