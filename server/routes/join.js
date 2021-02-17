const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const qs = require('querystring');
const bcrypt = require('bcrypt');

router.post('/id', async function (req, res, next) {
  //id 중복확인
  const post = req.body;
  await db.query(`SELECT user_id FROM user where user_id=?`, [post.id], function (error, result) {
    if (error) {
      next(error);
    }
    if (result.length === 0) {
      res.json({ already: false }); //중복없으면
    } else {
      res.json({ already: true }); //중복있으면
    }
  });
});

router.post('/nick', async function (req, res, next) {
  //nickname 중복확인
  const post = req.body;
  await db.query(`SELECT user_id FROM user where nickname=?`, [post.nickname], function (error, result) {
    if (error) {
      next(error);
    }
    if (result.length === 0) {
      res.json({ already: false }); //중복없으면
    } else {
      res.json({ already: true }); //중복있으면
    }
  });
});

router.post('/', async function (req, res, next) {
  //회원가입
  const post = req.body;
  let user;

  bcrypt.hash(post.password, 10, async function (err, hash) {
    await db.query(
      `INSERT INTO user(user_id,password,nickname,gender) 
              VALUES(?,?,?,?);`,
      [post.id, hash, post.nickname, post.gender],
      async function (error, result) {
        if (error) {
          next(error);
        }
        await db.query(`SELECT id from user where user_id=?;`,[post.id],async function(error2,result2){
          if(error2){
            next(error2);
          }
          let my_id = result2[0].id;

          await db.query(`INSERT INTO aboutme(biography,instagram,facebook,twitter,my_id) VALUES ('','https://instagram.com/','https://facebook.com/','https://twitter.com/',?); `,
          [my_id],function(error3, result3){
            if(error3){
              next(error3);
            }
          })
        })
      }
    );
  });

  //회원가입 성공 시 바로 로그인.
  db.query(`SELECT * FROM user WHERE user_id=?`, [post.id], function (error, result) {
    if (error) {
      next(error);
    }
    user = result[0];

    req.login(user, function (err) {
      return res.status(200).send({ code: 200, data: user });
    });
  });
});

module.exports = router;
