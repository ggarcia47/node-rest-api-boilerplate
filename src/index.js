const express = require('express');
const api = express();
const route = require
//const routes = require('../src/application/routes');
const config = require('../config');
const morgan = require('morgan');
const routes = require('../src/application/routes/index');
const middlewares = new(require('../src/application/middlewares'));

api.use(morgan(config.logging));
api.use(express.json());
api.use(config.endpoint, routes);
//api.use(middlewares.notFound);
api.use(middlewares.serverError);

api.get('/',routes);
api.use('/',require('../src/application/routes/index'))
api.listen(config.port, () => {
	console.info(`Server running on PORT ${config.port} (${config.env})`);
});
