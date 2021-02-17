const db = require('../db');
const passport = require('passport');
const local = require('./localStrategy');

module.exports = function () {
  passport.serializeUser(function (user, done) {
    //로그인 성공 시
    done(null, user.id); //id는 식별자
  });

  passport.deserializeUser(function (id, done) {
    //페이지에 방문할 때 마다 콜백함수가 호출. id에는 serializeUser의 식별자값이 들어옴.
    db.query('SELECT user.id,user_id,password,nickname,gender,aboutme.id AS aboutId,biography,instagram,facebook,twitter,my_id FROM user LEFT JOIN aboutme on user.id=aboutme.my_id WHERE user.id=?;', [id], function (err, result) {
      if (err) {
        throw err;
      }
      done(null, result[0]);
    });
  });

  local();
};
