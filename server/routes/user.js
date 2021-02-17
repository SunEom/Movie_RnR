const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const authCheck = require('../lib/authCheck');
const bcrypt = require('bcrypt');

router.post('/profile', async function (req, res, next) {
  //nickname, gender변경
  if (!authCheck.IsOwner(req, res)) {
    console.log('not login');
    res.status(400).send({ code: 400, error: 'not login' });
  }
  const post = req.body;
  console.log(req.user.id);
  await db.query(`UPDATE user SET nickname=?, gender=? WHERE id=?`,
    [post.nickname, post.gender, req.user.id],
    async (error, result) => {
      if (error) {
        next(err);
      }
      await db.query(`UPDATE aboutme SET biography=?, instagram=? ,facebook=? ,twitter=? WHERE id=?`,
      [post.biography, post.instagram, post.facebook, post.twitter, req.user.aboutId], 
      async function(error2,result2){
        if(error2){
          next(error2);
        }
        await db.query(`SELECT user.id,user_id,password,nickname,gender,aboutme.id AS aboutId,biography,instagram,facebook,twitter,my_id FROM user LEFT JOIN aboutme on user.id=aboutme.my_id WHERE user.id=?`, [req.user.id], async (error3, result3) => {
          if (error3) {
            next(error3);
          }
          res.status(201).send({ code: 201, data: result3 });
        })
      })
    });
});



router.post('/password', async function (req, res, next) {
  //password 변경
  if (!authCheck.IsOwner(req, res)) {
    console.log('not login');
    res.status(400).send({ code: 400, error: 'not login' });
  }
  const post = req.body;
  bcrypt.hash(post.password, 10, async function (err, hash) {
    //기존pwd
    await db.query(`SELECT password FROM user WHERE id=?`),
      [req.user.id],
      async (error, result) => {
        if (error) {
          next(error);
        }
        if (result[0].password != hash) {
          res.status(400).send({ code: 400, error: '현재 비밀번호를 잘못 입력하였습니다.' });
        } else {
          bcrypt.hash(post.newPassword, 10, async function (err2, hash2) {
            //변경할 pwd
            await db.query(`UPDATE user SET password=? WHERE id=?`),
              [hash2, req.user.id],
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
  await db.query(`SELECT id, nickname, gender FROM user WHERE id=?`,[req.params.id],
  function(error,result){
    if (error) {
      next(error);
    }
    console.log("프로필",result);
    res.status(200).send({ code: 200, data: result});
  })
});

module.exports = router;
