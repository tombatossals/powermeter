var   passport = require('passport')
    , Computer = require('./models/computer');

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}

module.exports = function(app) {
    app.get('/', function(req, res){
      res.render('home', { user: req.user });
    });

    app.get('/profile/manage', ensureAuthenticated, function(req, res){
      res.render('profile', { user: req.user, section_active: 'profile', subsection_active: 'manage' });
    });

    app.get('/computers/manage', ensureAuthenticated, function(req, res){
      res.render('computers', { user: req.user, section_active: 'computers', subsection_active: 'manage' });
    });

    app.get('/computers/add', ensureAuthenticated, function(req, res){
      res.render('computers_add', { user: req.user, section_active: 'computers', subsection_active: 'add' });
    });

    app.post('/computers/add', ensureAuthenticated, function(req, res){
        var ip = req.body.ip
          , mac = req.body.mac;

        console.log(ip, mac);
        var computer = new Computer();
        computer.ip = ip;
        computer.mac = mac;
        computer.user = req.user;
        computer.save(function(err) {
            console.log(err);
            res.redirect("/computers/manage");
        });
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
