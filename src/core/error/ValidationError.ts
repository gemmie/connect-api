import { ServerError } from './ServerError';

export class ValidationError extends ServerError {
    constructor(message: string) {
        super(message, 400);
    }
}
