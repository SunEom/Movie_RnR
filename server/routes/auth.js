const express = require('express');
const db = require('../lib/db');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { runInNewContext } = require('vm');
const router = express.Router();

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
