const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const qs = require('querystring');
const { nextTick } = require('process');

router.post('/', async function (req, res) {
  const post = req.body;
  let checkId = true;
  let checkNickname = true;
  // await db.query(`SELECT user_id, nickname FROM user`, async function (error, result) {
  //   if (error) {
  //     throw error;
  //   }
  //   console.log(result);
  //   let i = 0;
  //   while (i < result.length) {
  //     if (post.id == result[i].user_id) {
  //       checkId = false;
  //     }
  //   }
  // });

  // await db.query(`SELECT nickname FROM user`, function (error, result) {
  //   if (error) {
  //     throw error;
  //   }
  //   let i = 0;
  //   while (i < result.length) {
  //     if (post.nickname == result[i].nickname) {
  //       checkNickname = false;
  //     }
  //   }
  // });

  await db.query(`SELECT * from user where user_id =?`, [post.id], async (error, result) => {
    if (error) {
      console.error(error);
      next(err);
    }
    console.log(result.length);
    if (result.length !== 0) {
      checkId = false;
    }

    await db.query(`SELECT * from user where nickname =?`, [post.nickname], async (error, result) => {
      if (error) {
        console.error(error);
        next(err);
      }
      console.log(result.length);
      if (result.length !== 0) {
        checkNickname = false;
      }

      console.log(checkId, checkNickname);

      if (checkId && checkNickname) {
        console.log('ok');
        await db.query(
          `INSERT INTO user(user_id,password,nickname,gender) 
            VALUES(?,?,?,?);`,
          [post.id, post.password, post.nickname, post.gender],
          function (error, result) {
            if (error) {
              console.log('mysql err');
              throw error;
            }
            res.send('ok');
          }
        );
        console.log('ok2');
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

module.exports = router;
