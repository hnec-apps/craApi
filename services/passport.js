const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const easyPbkdf2 = require("easy-pbkdf2")();
const user_mgr = require('../controller/user').user_mgr;
const models = require("../modules");

passport.use(new LocalStrategy(
  function (username, password, done) {
    findByUserName(username, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      authenticate(user, password, function (valid) {
        if (valid) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    });
  }
));

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  findById(id, function (err, user) {
    done(err, user);
  });
});

module.exports = app => {
  app.post('/login', function (req, res, next) {
    passport.authenticate('local', {
        failureRedirect: '/?msg=1'
      },
      function (err, user) {
        if (err) {
          return next(err);
        }

        if (!user) {
          return res.send({
            login: 2
          });
        }

        req.logIn(user, function (err) {
          if (err) {
            return next(err);
          }
          if (user.repName) {
            return res.send({
              login: true,
              admin: false
            });
          } else {
            return res.send({
              login: true,
              admin: true
            });
          }

        });
      })(req, res, next);
  });

  // here if a user wants to logout of the app
  app.get('/logout', ensureAuthenticated, function (req, res) {
    req.session.destroy();
    res.redirect('/');
  });
  return app;
}

function findById(id, fn) {
  models.User.findOne({
    where: {
      status: 1,
      id: id
    }
  }).then(function (user) {
    if (user) {
      fn(null, user);
    } else {
      fn(new Error('User ' + id + ' does not exist'));
    }
  });


}

function findByUserName(username, fn) {
  models.User.findOne({
    where: {
      status: 1,
      email: username
    }
  }).then(function (user) {
    if (user) {

      fn(null, user);
    } else {
      return fn(null, null);
    }
  });


}



function authenticate(user, userEnteredPassword, callback) {
  // make sure the user-entered password is equal to the previously
  // created hash when hashed with the same salt.
  easyPbkdf2.verify(user.salt, user.password, userEnteredPassword, function (err, valid) {
    if (err) {
      console.log(err);
    } else {
      callback(valid);
    }
  });
}

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/')
}