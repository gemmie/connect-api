import axios from 'axios';

export const httpClient = axios.create({
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },
});
