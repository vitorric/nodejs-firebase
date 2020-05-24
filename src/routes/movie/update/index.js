const { updateMovie } = require('../../../services/movie');

module.exports = () => (req, res) => {
  updateMovie(req.body).then(result => res.status(200).jsonp(result))
    .catch((error) => {
      console.log('\x1b[31m%s\x1b[0m', 'Erro in updateMovie:', error);
      res.status(200).jsonp({sucess: false, message: error});
    });
};