import { Server } from 'http';
import express, { Express } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { App } from './types';
import { registerRoutes } from '../../routes/routes-registry';

export const createApp = async (): Promise<App> => {
    const app: Express = express();
    let server: Server;

    app.use(bodyParser.json());

    app.use(cors());

    registerRoutes(app);

    const start = () => {
        server = app.listen(4050, () => {
            console.log(
                `⚡️[server]: Server is running at http://localhost:${4050}`
            );
        });

        return server;
    };

    const stop = () => {
        server.close();
    };

    return {
        start,
        stop,
    };
};
