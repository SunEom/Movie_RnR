const express = require('express');
const db = require('../lib/db');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = express.Router();
const passport = require('passport');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());

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
        return res.status(400).send({ error: info });
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
        return res.send(user);
      });
    });
  })(req, res, next);
});

router.get('/login', function (req, res) {
  if (req.isAuthenticated()) {
    console.log('login', req.user);
    return res.send(req.user);
  }
  return res.send({});
});

router.get('/logout', function (req, res) {
  req.logout();
  req.session.destroy();
  res.send('logout');
});

module.exports = router;
