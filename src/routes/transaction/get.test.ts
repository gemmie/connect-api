import { App } from '../../core/application/types';
import { createApp } from '../../core/application/app';
import { mockBankApi, mockRevolutApi } from '../../mock-bank-apis/mock-api';
import request from 'supertest';
import { Server } from 'http';
import nock from 'nock';

let app: App;
let server: Server;

const checkIfNockIsDone = () => {
    if (!nock.isDone()) {
        const pendingMocks = nock.pendingMocks();

        nock.cleanAll();

        throw Error(
            `Not all Nock HTTP mocks were used! Pending mocks: ${pendingMocks}`
        );
    }
};
describe('GET /transactions', () => {
    beforeAll(async () => {
        app = await createApp();
        server = app.start();
    });

    afterAll(() => {
        app.stop();
    });

    afterEach(() => {
        checkIfNockIsDone();
    });

    it('should transform transaction data to unified structure', async () => {
        expect.assertions(2);

        mockBankApi();

        const { status, body } = await request(server).get('/transactions');

        expect(status).toBe(200);
        expect(body).toMatchSnapshot();
    });

    it('should return unified transaction data of bank specified in source query param', async () => {
        expect.assertions(2);

        mockRevolutApi();

        const { status, body } = await request(server).get(
            '/transactions?source=revolut'
        );

        expect(status).toBe(200);
        expect(body).toMatchSnapshot();
    });

    it('should return error if source bank is incorrect', async () => {
        expect.assertions(2);

        const { status, body } = await request(server).get(
            '/transactions?source=non-existent-bank'
        );

        expect(status).toBe(400);
        expect(body.error).toBe('ValidationError');
    });

    it('should throw an error if external api is unavailable', async () => {
        expect.assertions(1);

        const { status } = await request(server).get('/transactions');

        expect(status).toBe(503);
    });
});
