# Users

Fnode-rest-api-boilerplate is a JS api that returns an alphabetic list of actives users

## Installation

You will need to install Nodejs first, clone the repo and then run npm start 

```bash
npm start
```

## Usage
This Api will create an endpoint that you will need to consume 
 
```bash
http://localhost:3000/api/user
```
## Usage
This Api returns and object "Users" that contains an array of users

```python
"Users": {
        "users": [
            {
                "id": 6765854345,
                "name": "Elena Medina",
                "lastname": "Castillo",
                "birthday": "1983-05-17",
                "is_active": true,
                "email": "ecastillo@email.com",
                "genre": "Femenino",
                "Age": 36
            }..

```

## Settings
You can config the  in witch the API will run using the var PORT : number with default type on 3000
On file:
```bash
./config/index.js
```


Please make sure to update tests as appropriate.

## Build
This code uses express 4.17.1, morgan 1.9.1, node-fetch 2.6.0, nodemon 1.19.4, chai 4.2.0, eslint 6.5.1, mocha 6.2.2"
