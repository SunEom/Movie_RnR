const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const qs = require('querystring');
const bcrypt = require('bcrypt');

module.exports = function (passport) {
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
        console.log('nickname ok');
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
        function (error, result) {
          if (error) {
            next(error);
          }
          console.log('insert complete');
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
        console.log('회원가입성공, 로그인');
        return res.status(200).send({code: 200, data: user});
      });
    });
  });
  return router;
};
