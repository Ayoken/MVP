'use strict';

const glob = require('glob');
const router = require('express').Router();
// const { appAuth } = require('../../app/interceptors/auth.guard');
const { resFailed } = require('../utils/response');
glob
  .sync('*.js', {
    cwd: __dirname,
    ignore: 'index.js'
  })
  .forEach(file => {
    const fileRoutes = require(`./${file}`);
    // if(fileRoutes.auth){
    //   router.use(fileRoutes.baseUrl, appAuth, fileRoutes.router);
    // }else{
      router.use(fileRoutes.baseUrl, fileRoutes.router);
    // }
  });

  router.all('**', (req, res) => {
    return resFailed(res, 404, 'Route Not Found', null);
  });

module.exports = router;
