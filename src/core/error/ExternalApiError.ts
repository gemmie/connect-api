import { ServerError } from './ServerError';

export class ExternalApiError extends ServerError {
    constructor(message: string) {
        super(message, 503);
    }
}
