const router = require('express').Router();

module.exports = () => {

  router.post('/movie/create', require('./create')());

  router.post('/movie/update', require('./update')());

  router.post('/movie/delete', require('./delete')());

  return router;
};