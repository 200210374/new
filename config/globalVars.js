/**
 * Created by Brandon Roy on 26/11/2016.
 */

module.exports = {
  db: 'mongodb://<dbuser>:<dbpassword>@ds157487.mlab.com:57487/directory',
  secret: 'salt',
  ids: {
    facebook: {
      clientID: '0000000000000000',
      //randomly generated string of letters and numbers
      clientSecret: 'f0kusz2l319rb6758pe4qwhagontjmxyd',
      callbackURL: 'http://localhost:3000/facebook/callback'
    }
  }
};
