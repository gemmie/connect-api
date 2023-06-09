import { httpClient } from '../http/http-client';
import { SterlingTransactionResponse } from '../../mock-bank-apis/types';
import { ExternalApiError } from '../error/ExternalApiError';
import { AxiosResponse } from 'axios';

export const getSterlingTransactions =
    async (): Promise<SterlingTransactionResponse> => {
        try {
            return await httpClient
                .get('https://mock-api.com/api/sterling')
                .then(
                    (response: AxiosResponse<SterlingTransactionResponse>) =>
                        response.data
                );
        } catch (error) {
            throw new ExternalApiError('Failed to fetch from external API.');
        }
    };
