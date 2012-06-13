var passport = require('passport');

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}

module.exports = function(app) {
    app.get('/', function(req, res){
      res.render('home', { user: req.user });
    });

    app.get('/profile', ensureAuthenticated, function(req, res){
      res.render('profile', { user: req.user });
    });

    app.get('/profile/keys', ensureAuthenticated, function(req, res){
      res.render('profile_keys', { user: req.user });
    });

    app.get('/profile/keys/add', ensureAuthenticated, function(req, res){
      res.render('profile_keys_add', { user: req.user });
    });

    app.get('/login', function(req, res){
      res.render('home', { user: req.user });
    });

    app.get('/auth/google',
        passport.authenticate('google', { failureRedirect: '/login' }),
        function(req, res) {
            res.redirect('/');
        }
    );

    app.get('/auth/google/return',
        passport.authenticate('google', { failureRedirect: '/login' }),
        function(req, res) {
            res.redirect('/');
        }
    );

    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });
}
