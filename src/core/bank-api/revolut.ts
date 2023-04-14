import { httpClient } from '../http/http-client';
import { RevolutTransactionResponse } from '../../mock-bank-apis/types';
import { AxiosResponse } from 'axios';
import { ExternalApiError } from '../error/ExternalApiError';

export const getRevolutTransactions =
    async (): Promise<RevolutTransactionResponse> => {
        try {
            return await httpClient
                .get('https://mock-api.com/api/revolut')
                .then(
                    (response: AxiosResponse<RevolutTransactionResponse>) =>
                        response.data
                );
        } catch (error) {
            throw new ExternalApiError('Failed to fetch from external API.');
        }
    };
