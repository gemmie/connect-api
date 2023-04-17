import { createApp } from './core/application/app';
import { mockBankApiPersist } from './mock-bank-apis/mock-api';

createApp()
    .then(({ start }) => start())
    .then(() => mockBankApiPersist());
