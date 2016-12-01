/**
 * Created by Brandon Roy on 30/11/2016.
 */


var express = require('express');
var router = express.Router();


var directory = require('../models/directory');


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        res.redirect('/login');
    }
}


router.get('/', isLoggedIn, function(req, res, next) {

    directory.find(function(err, directory) {
        if (err) {
            console.log(err);
            res.render('error');
        }
        else {
            res.render('directory', {
                title: 'Business Listing',
                directory: directory,
                user: req.user
            });
        }
    });
});


router.get('/add', isLoggedIn, function(req, res, next) {
    res.render('add-directory', {
        title: 'Submit a new business',
        user: req.user
    } );
});


router.post('/add', isLoggedIn, function(req, res, next) {
    directory.create( {
        name: req.body.name,
        Type: req.body.Type,
        Owner: req.body.Owner,
        Contact: req.body.Contact,
        opening: req.body.Opening
       }, function(err, directory) {
        if (err) {
            console.log(err);
            res.render('error', { message: 'error didnt add a business'} );
        }
        else {
            res.redirect('/directory');
        }
    });
});

router.get('/delete/:_id', isLoggedIn, function(req, res, next) {

    var _id = req.params._id;


    directory.remove( { _id: _id }, function(err) {
        if (err) {
            console.log(err);
            res.render('error', {
                message: 'error didnt delete business',
                error: err
            });
        }
        else {
            res.redirect('/directory');
        }
    });
});


router.get('/:_id', isLoggedIn, function(req, res, next) {
    var _id = req.params._id;
    directory.findById( { _id: _id }, function(err, directory) {
        if (err) {
            console.log(err);
            res.render('error', {
                message: 'error, could not load directory',
                error: err
            });
        }
        else {
            res.render('edit-directory', {
                title: 'Edit the listing',
                directory: directory,
                user: req.user
            });
        }
    });
});


router.post('/:_id', isLoggedIn, function(req, res, next) {

    var _id = req.params._id;

    var directory = new directory({
        _id: _id,
        name: req.body.name,
        Type: req.body.Type,
        Owner: req.body.Owner,
        Contact: req.body.Contact,
        opening: req.body.Opening
    });


    directory.update({ _id: _id }, directory, function(err) {
        if (err) {
            console.log(err);
            res.render('error', {
                message: 'Error could not update the listing',
                error: err
            });
        }
        else {
            res.redirect('/directory');
        }
    });
});


module.exports = router;
