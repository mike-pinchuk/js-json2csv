# Converter .json to .csv

This is a small app, which allow to user convert JSON files to .csv format

### Pre-development

npm i
npm run start:dev

### Development

#### run locally

#### run docker

------------------------------------------------------------------

# doxyme-api-extentions

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)


## Core technologies
 - Node.js
 - Loopback4
 - MySQL
 - npm as package manager
## Installation
Install dependencies:
```bash
$ npm i
```

Create and fill the `.env` file
```bash
$ cp .env.example .env && nano .env
```

### Build
Build local dist
```bash
$ npm run clean && npm run build
```

Build with Docker
```bash
$ docker:build
```

### Start Application
Start server:
```bash
$ npm start
```

Start server with Docker
```bash
$ docker:run
```

After this, the server should be available at http://localhost:3000 from the host machine.
### Testing
Acceptance and integration tests require connection to MySQL instance

Run tests:
```bash
$ npm run test
```

Also you can run tests separately:
- end-2-end (acceptance)
	```bash
    $ npm run test:acceptance
    ```
- integration 
	```bash
    $ npm run test:integration
    ```
- unit 
	```bash
    $ npm run test:unit
    ```
### Test Coverage
Check project test coverage
```bash
$ npm run coverage
```

### Development
 - Create new controller 
    ```bash
    $ lb4 controller
    ```
 - Create new service 
    ```bash
    $ lb4 service
    ```
 - Create new model 
    ```bash
    $ lb4 model
    ```
 - Create new repository 
    ```bash
    $ lb4 repository
    ```
 - Create new datasource 
    ```bash
    $ lb4 datasource
    ```