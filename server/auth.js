var passport = require('passport')
  , GoogleStrategy = require('passport-google').Strategy
  , User = require('./models/user');

passport.use(new GoogleStrategy({
        returnURL: 'http://localhost:3000/auth/google/return',
        realm: 'http://localhost:3000/'
    },
    function(identifier, profile, done) {
        process.nextTick(function () {
            var email = profile.emails[0].value;
            User.findOne( { 'email': email }, function(err, user) {
                if (!user) {
                    profile['email'] = email;
                    delete profile['emails'];
                    var user = User.create(profile, function(err, user) {
                        return done(err, email);
                    });
                } else {
                    return done(err, email);
                }
            });
        });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(email, done) {
    User.findOne( {'email': email }, function (err, user) {
        done(null, user);
    });
});
