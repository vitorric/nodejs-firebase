module.exports = (app) => {
  app.use('/api', require('./movie')());
};