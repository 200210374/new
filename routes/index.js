var express = require('express');
var router = express.Router();


var Account = require('../models/account');
//remember to install connect

var passport = require('passport');
var flash = require('connect-flash');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

router.get('/directory', function(req, res, next) {
  res.render('directory', { title: 'directory' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'services' });
});


router.get('/home', function(req, res, next) {
  res.render('home', { title: 'home' });
});

router.get('/directory', function(req, res, next) {
  res.render('directory', { title: 'directory' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.get('/registration', function(req, res, next) {
  res.render('registration', { title: 'registration' });
});


router.get('/add-directory', function(req, res, next) {
  res.render('add-directory', { title: 'add-directory' });
});




router.post('/register', function(req, res, next) {
  // use the Account model and passort to create a new user
  Account.register(new Account(
      { username: req.body.username }),
      req.body.password,
      function(err, account) {
        if (err) {
          console.log(err);
          res.redirect('/register');
        }
        else {
          res.redirect('/login');
        }
      });
});

/* GET login */
router.get('/login', function(req, res, next) {

  var messages = req.session.messages || []; //flash.message;

  // clear the session messages
  req.session.messages = [];

  res.render('login', {
    title: 'Login',
    messages: messages,
    user: req.user
  });
});


router.post('/login', passport.authenticate('local', {
  successRedirect: '/directory',
  failureRedirect: '/login',
  failureMessage: 'Invalid Login',
  failureFlash: true
}));


router.get('/logout', function(req, res, next) {

  req.logout();
  res.redirect('/login');
});


router.get('/facebook', passport.authenticate('facebook'), function(req, res, next) {});

router.get('/facebook/callback', passport.authenticate('facebook', {
  failureRedirect: '/login',
  failureMessage: 'Invalid Login'
}), function(req, res, next){
  res.redirect('/directory');
});

module.exports = router;
