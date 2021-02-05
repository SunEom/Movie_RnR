const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const qs = require('querystring');

router.post('/', async function (req, res) {
  const post = req.body;
  let checkId = false;
  let checkNickname = false;
  await db.query(`SELECT user_id FROM user where user_id=?`,[post.id], function (error, result) {
    if (error) {
      throw error;
    }
    if(result.length==0){
        console.log('id ok');
        checkId=true;
        console.log(checkId);
    }
  });

  await db.query(`SELECT nickname FROM user where nickname=?`,[post.nickname], function (error, result) {
    if (error) {
      throw error;
    }
    if(result.length==0){
        console.log('nickname ok');
        checkNickname=true;
        console.log(checkNickname);
        console.log(post);
    }
  });

  if (checkId && checkNickname) {
      console.log("insert start");
    db.query(
      `INSERT INTO user(user_id,password,nickname,gender) 
            VALUES(?,?,?,?);`,
      [post.id, post.password, post.nickname, post.gender],
      function (error, result) {
        if (error) {
            console.log('mysql err')
          throw error;
        }
        console.log("insert complete");
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
