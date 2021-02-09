const express = require('express');
const db = require('../lib/db');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());

module.exports = function (passport) {
  router.post('/login', passport.authenticate('local'), function (req, res, next) {
    res.json(req.user);
  });

  router.get('/logout', function (req, res) {
    req.logout();
    req.session.save(function () {
      res.redirect('/');
    });
  });
  return router;
};
