const connFb = require('../../conn');

exports.createMovie = async ({name, stars, year, synopsis}) => {
  try {
    connFb.database().ref(`/movies/${name}`).set({name, stars, year, synopsis});
    return {sucess: true, message: 'Movie added' };
  }
  catch(err)
  {
    console.log(err);
    throw err;
  }
};

exports.updateMovie = async ({name, stars}) => {
  try {
    connFb.database().ref(`/movies/${name}`).update({stars});
    return {sucess: true, message: 'Movie updated' };
  }
  catch(err)
  {
    console.log(err);
    throw err;
  }
};

exports.deleteMovie = async ({name}) => {
  try {
    connFb.database().ref(`/movies/${name}`).remove();
    return {sucess: true, message: 'Movie removed' };
  }
  catch(err)
  {
    console.log(err);
    throw err;
  }
};