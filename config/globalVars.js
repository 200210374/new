


module.exports = {
  db: 'mongodb://<dbuser>:<dbpassword>@ds157487.mlab.com:57487/directory',
  secret: 'salt',
  ids: {
    facebook: {
      clientID: '1202674773150793',
      clientSecret: '9dd2a26ca2e1c05b2328a1cb2c12a108',
      callbackURL: 'http://localhost:3000/facebook/callback'
    }
  }
};
