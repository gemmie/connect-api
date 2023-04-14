export class ServerError extends Error {
    public status: number;

    constructor(message: string, status: number) {
        super(message);
        this.name = this.constructor.name;

        this.status = status || 500;
    }
}
