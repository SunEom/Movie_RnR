const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const bcrypt = require('bcrypt');
const db = require('../db');

module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'id', //post로 들어오는 form 태그의 name
        passwordField: 'password',
      },
      function (username, password, done) {
        db.query('SELECT user.id,user_id,password,nickname,gender,aboutme.id AS aboutId,biography,instagram,facebook,twitter,my_id FROM user LEFT JOIN aboutme on user.id=aboutme.my_id WHERE user_id=?;', [username], function (err, result) {
          if (err) {
            console.log('mysql error');
            return done(err);
          }
          //확인 한 후 db함수 밖으로 빼기.
          if (result[0]) {
            bcrypt.compare(password, result[0].password, function (err, check) {
              if (check) {
                //사용자가 입력한 pwd와 db에 저장된 pwd가 일치하면  result는 true.
                console.log('user:' + result[0]);
                return done(null, result[0]); //result[0] : 사용자에 대한 정보
                //result[0] serializeUser 콜백함수의 첫번째 인자로 줌.
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
};
