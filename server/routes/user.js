const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const authCheck = require('../lib/authCheck');
const bcrypt = require('bcrypt');

router.post('/', async function (req, res, next) {
  const post = req.body;
  let checkId = true;
  let checkNickname = true;

  await db.query(`SELECT * from user where user_id =?`, [post.id], async (error, result) => {
    if (error) {
      next(err);
    }
    if (result.length !== 0) {
      checkId = false;
    }

    await db.query(`SELECT * from user where nickname =?`, [post.nickname], async (error, result) => {
      if (error) {
        next(err);
      }
      if (result.length !== 0) {
        checkNickname = false;
      }

      console.log(checkId, checkNickname);

      if (checkId && checkNickname) {
        await db.query(
          `INSERT INTO user(user_id,password,nickname,gender) 
            VALUES(?,?,?,?);`,
          [post.id, post.password, post.nickname, post.gender],
          function (error, result) {
            if (error) {
              console.log('mysql err');
              next(error);
            }
            res.status(200).send({ code: 200 });
          }
        );
      } else {
        if (!checkId) {
          res.status(400).send({ error: 'Already used id' });
        } else {
          res.status(400).send({ error: 'Already used Nickname' });
        }
      }
    });
  });
});

router.post('/pofile', async function (req, res, next) {
  //nickname, gender변경
  if (!authCheck.IsOwner(req, res)) {
    console.log('not login');
    res.status(400).send({ code: 400, error: 'not login' });
  }
  const post = req.body;
  await db.query(`UPDATE user SET nickname=?, gender=? WHERE user_id=?`),
    [post.nickname, post.gender, req.user.user_id],
    async (error, result) => {
      if (error) {
        next(err);
      }
      db.query(`SELECT * FROM user WHERE user_id=?`, [req.user.user_id], async (error, result) => {
        if (error) {
          next(error);
        }
        res.status(201).send({ code: 201, data: result });
      });
    };
});

router.post('/password', async function (req, res, next) {
  //password 변경
  if (!authCheck.IsOwner(req, res)) {
    console.log('not login');
    res.status(400).send({ code: 400, error: 'not login' });
  }
  const post = req.body;
  bcrypt.hash(req.user.password, 10, async function (err, hash) {
    //기존pwd
    await db.query(`SELECT password FROM user WHERE user_id=?`),
      [req.user.user_id],
      async (error, result) => {
        if (error) {
          next(error);
        }
        if (result[0].password != hash) {
          res.status(400).send({ code: 400, error: '현재 비밀번호를 잘못 입력하였습니다.' });
        } else {
          bcrypt.hash(post.password, 10, async function (err2, hash2) {
            //변경할 pwd
            await db.query(`UPDATE user SET password=? WHERE user_id=?`),
              [hash2, req.user.user_id],
              async (error, result) => {
                if (error) {
                  next(error);
                }
                res.stauts(201).send({ code: 201 });
              };
          });
        }
      };
  });
});

router.get('/:id', async function (req, res, next){
  await db.query(`SELECT id, user_id, password, nickname, gender FROM user WHERE id=?`,[req.params.id],
  function(error,result){
    if (error) {
      next(error);
    }
    console.log(result);
    res.status(200).send({ code: 200, data: result});
  })
});

module.exports = router;
