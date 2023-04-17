# Connect API

### Overview
This project is an REST API exposing one endpoint `/transactions?source:bank-name`.

The endpoint transforms different bank transactions data to a unified structure.


### Project is written in:

[![My Skills](https://skillicons.dev/icons?i=expressjs,nodejs,typescript&theme=dark)](https://skillicons.dev)

Tools used include: 

- [x] Prettier 
- [x] Eslint
- [x] Jest 
- [x] Nock 
- [x] Husky
- [x] Nodemon

### Project structure

- `src`
  - `core`
      - `application` - express app implementation
      - `bank-api` - expose methods to communicate with external apis 
      - `error` - error handling 
      - `http` - http client configuration 
  - `mock-bank-apis` - mocked external api endpoints (with nock)
  - `routes` - routes registration and implemention along with tests 
  - `services` - services for handling data transformation 
  - `index.ts` - entrypoint


### Local development

This project uses node 18.14.2.

To run it locally three easy steps are needed:

```nvm use```

```npm i```

```npm run dev```
