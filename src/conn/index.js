const firebase = require('firebase-admin');

module.exports = (() => {
  let serviceAccount = require('./firebase-data.json');

  firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: 'https://nodejs-filmes.firebaseio.com'
  });

  return firebase;
})();