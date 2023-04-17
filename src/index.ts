import { mockBankApiPersist } from './mock-bank-apis/mock-api';
import { createApp } from './core/application/app';

createApp()
    .then(({ start }) => start())
    .then(() => mockBankApiPersist());
