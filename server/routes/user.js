const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const qs = require('querystring');

router.post('/', async function (req, res) {
  const post = req.body;
  let checkId = true;
  let checkNickname = true;
  await db.query(`SELECT id, nickname FROM user`, function (error, result) {
    if (error) {
      throw error;
    }
    let i = 0;
    while (i < result.length) {
      if (post.id == result[i].id) {
        checkId = false;
      }
    }
  });

  await db.query(`SELECT nickname FROM user`, function (error, result) {
    if (error) {
      throw error;
    }
    let i = 0;
    while (i < result.length) {
      if (post.nickname == result[i].nickname) {
        checkNickname = false;
      }
    }
  });

  if (checkId && checkNickname) {
    console.log('ok user1');
    db.query(
      `INSERT INTO user(user_id,password,nickname,gender) 
            VALUES(?,?,?,?);`,
      [post.id, post.password, post.nickname, post.gender],
      function (error, result) {
        if (error) {
          console.log('insert err');
          throw error;
        }
        console.log('ok user2');
        res.send('ok');
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

module.exports = router;
