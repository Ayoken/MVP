'use strict';
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const xmlparser = require('express-xml-bodyparser');
const expressip = require('express-ip');
const db = require('./helpers/database');
const path = require('path');
const DIR = '../client/build';
const configs = require('./config');
const port = configs.PORT;
const ENNV = process.env.NODE_ENV || 'development';
const { errors, isCelebrate } = require('celebrate');

const logger = require('morgan');
// var cookieParser = require('cookie-parser');
const authRouter = require('./routes/index');
const { resSuccess, resFailed } = require('./utils/response');
// const { checkCache } = require('./app/interceptors/rediscache');
const app = express();
const mongo_express = require('mongo-express/lib/middleware');
const mongo_express_config = require('./mongo_express_config');

app.set('trust proxy', true);

app.use(express.static(path.join(__dirname, '..', DIR)));

function initMiddlewares() {
  db.load();
  app.use(cors());
  app.use(
    bodyParser.urlencoded({
      extended: true,
      limit: '50mb',
      parameterLimit: 2000000
    })
  );
  app.use(bodyParser.json({ limit: '50mb' }));	
	app.use(logger('dev'));
  // app.use(xmlparser());
  app.use(expressip().getIpInfoMiddleware);
}

function initRoutes(){
  // app.use('/db-admin', mongo_express(mongo_express_config))
  app.use('/v1', authRouter);
  app.all("/download", (req, res) => {
    const file = `${__dirname}/public/api-collection.json`;
    return res.download(file);
  });
  
  // Handles any requests that don't match the ones above
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', DIR, '/index.html'));
  });
  app.all('**', (req, res) => {
    return resFailed(res, 404, 'Not Found', null);
  });
}

function initErrorHandlers() {
  app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) {
      return resFailed(res, 400, 'Bad Request', null);
    }
    if (isCelebrate(err)) {
      const message = err.joi ? err.joi.details[0].message.replace(/["]+/g, '') : err.details[0].message.replace(/["]+/g, '');
      return resFailed(res, 400, message, null);
    }

    return next(err);
  });
  app.use(errors());
}


function init() {
  initMiddlewares();
  initRoutes();
  initErrorHandlers();

  // console.log(process.env.ENV);
  app.listen(port, () => console.log(`Server running on port ${port} and environment = ${ENNV}`));
}

init();