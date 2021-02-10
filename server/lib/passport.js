const db = require('../lib/db');
const bcrypt = require('bcrypt');

module.exports = function (app) {
  const session = require('express-session');
  const passport = require('passport');
  const LocalStrategy = require('passport-local').Strategy;

  passport.serializeUser(function (user, done) {
    //로그인 성공 시
    done(null, user.user_id); //user_id는 식별자
  });

  passport.deserializeUser(function (id, done) {
    //페이지에 방문할 때 마다 콜백함수가 호출. id에는 serializeUser의 식별자값이 들어옴.
    let user;
    db.query('SELECT * FROM user WHERE user_id=?;', [id], function (err, result) {
      if (err) {
        throw err;
      }
      let json = JSON.stringify(result[0]);
      user = JSON.parse(json);
      done(null, user);
    });
  });

  passport.use(
    new LocalStrategy(
      {
        usernameField: 'id', //post로 들어오는 form 태그의 name
        passwordField: 'password',
      },
      async function (username, password, done) {
        await db.query('SELECT * FROM user WHERE user_id=?;', [username], function (err, result) {
          if (err) {
            console.log('mysql error');
            return done(err);
          }
          let json = JSON.stringify(result[0]);
          let user = JSON.parse(json);
          //확인 한 후 db함수 밖으로 빼기.
          if (user) {
            bcrypt.compare(password, user.password, function (err, check) {
              if (check) {
                //사용자가 입력한 pwd와 db에 저장된 pwd가 일치하면  result는 true.
                console.log('user:' + user);
                return done(null, user); //user : 사용자에 대한 정보
                //user를 serializeUser 콜백함수의 첫번째 인자로 줌.
              } else {
                return done(null, false, { message: 'Incorrect password' });
              }
            });
          } else {
            return done(null, false, { message: 'Incorrect id' });
          }
        });
      }
    )
  );
  return passport;
};
