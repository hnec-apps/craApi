const passport = require('passport');
const  LocalStrategy = require('passport-local').Strategy;
const  easyPbkdf2 = require("easy-pbkdf2")();
// const mongoose = require('mongoose');
const model = require("../modules");


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

module.exports = function (router) {
  router.post('/user/login', function(req, res, next) {
    passport.authenticate('local', function(err, user) {
      if (err) { return next(err); }
      if (!user) { return res.send({login: 2 }); }
      
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        if (user.repName){
          return res.send({login: true,admin:false });
        }else{
          return res.send({login: true,admin:true });  
        }
        
      });
    })(req, res, next);
  });

  // here if a user wants to logout of the app
  router.get('/user/logout', ensureAuthenticated, function (req, res) {
    req.session.destroy();
    res.redirect('/');
  });
  return router;
}

// function findById(id, fn) {
//   User.getUserId(id,function(user){
//     if (user) {
//       fn(null, user);
//     } else {
//       ResellerC.getResellerId(id,function(user){
//         if (user) {
//           fn(null, user);
//         } else {
//           fn(new Error('User ' + id + ' does not exist'));
//         }
//       });
//     }
//   });

// }

// function findByUserName(username, fn) {
//   User.getUser(username,function(user){
//     if (user) {
//       fn(null, user);
//     } else {
//       ResellerC.getResellerByuser(username,function(user){
//         if (user) {
//           fn(null, user);
//         } else {
//           return fn(null, null);
//         }
//       });
//     }
//   });

// }

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
