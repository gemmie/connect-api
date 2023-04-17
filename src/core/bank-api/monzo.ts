import { httpClient } from '../http/http-client';
import { MonzoTransactionResponse } from '../../mock-bank-apis/types';
import { ExternalApiError } from '../error/ExternalApiError';
import { AxiosResponse } from 'axios';

export const getMonzoTransactions =
    async (): Promise<MonzoTransactionResponse> => {
        try {
            return await httpClient
                .get('https://mock-api.com/api/monzo')
                .then(
                    (response: AxiosResponse<MonzoTransactionResponse>) =>
                        response.data
                );
        } catch (error) {
            throw new ExternalApiError('Failed to fetch from external API.');
        }
    };
