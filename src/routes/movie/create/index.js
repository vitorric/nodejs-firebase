const { createMovie } = require('../../../services/movie');

module.exports = () => (req, res) => {
  createMovie(req.body).then(result => res.status(200).jsonp(result))
    .catch((error) => {
      console.log('\x1b[31m%s\x1b[0m', 'Erro in createMovie:', error);
      res.status(200).jsonp({sucess: false, message: error});
    });
};