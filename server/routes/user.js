const express = require('express');
const router = express.Router();
const db = require('../lib/db');

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

module.exports = router;
