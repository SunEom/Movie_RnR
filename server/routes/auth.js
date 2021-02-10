const express = require('express');
const router = express.Router();
const passport = require('passport');

<<<<<<< HEAD
router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());

module.exports = function (passport) {
  router.post('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return req.session.save(function (err) {
          if (err) {
            return next(err);
          }
          return res.send({ error: 'Login Error' });
        });
      }
      req.login(user, function (err) {
        if (err) {
          return next(err);
        }
        return req.session.save(function (err) {
          if (err) {
            return next(err);
          }
          return res.send('ok');
        });
      });
    })(req, res, next);
  });

  router.get('/logout', function (req, res) {
    req.logout();
    req.session.save(function () {
      res.send('ok');
    });
  });
  return router;
};
=======
router.post('/login', function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return req.session.save(function (err) {
        if (err) {
          return next(err);
        }
        return res.status(400).send({ code: 400, error: info.message });
      });
    }
    req.login(user, function (err) {
      if (err) {
        return next(err);
      }
      return req.session.save(function (err) {
        if (err) {
          return next(err);
        }
        return res.status(200).send({ code: 200, data: user });
      });
    });
  })(req, res, next);
});

router.get('/login', function(req,res,next){
  if(req.user){
    res.status(200).send({ code: 200, data: user });
  } else{
    res.status(400).send({code: 400, error: 'not login'});
  }
})

router.get('/logout', function (req, res, next) {
  req.logout();
  req.session.save(function () {
    res.status(200).send({ code: 200 });
  });
});

module.exports = router;
>>>>>>> 685b96e79204e1e9987cba0199a68d4c68cdba96
