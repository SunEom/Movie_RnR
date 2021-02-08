const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const qs = require('querystring');


module.exports = function(passport){
  router.get('/id', async function(req,res){ //id 중복확인
    const post = req.body;
    await db.query(`SELECT user_id FROM user where user_id=?`,[post.id], function (error, result) {
      if (error) {
        throw error;
      }
      if(result.length==0){
        console.log('id ok');
        res.json({already: false});  //중복없으면
      } else{
        res.json({already: true});  //중복있으면
      }
    });
  });

  router.get('/nick', async function(req,res){ //nickname 중복확인
    const post = req.body;
    await db.query(`SELECT user_id FROM user where user_id=?`,[post.id], function (error, result) {
      if (error) {
        throw error;
      }
      if(result.length==0){
        console.log('id ok');
        res.json({already: false});  //중복없으면
      } else{
        res.json({already: true});  //중복있으면
      }
    });
  });


  router.post('/', async function (req, res) { //회원가입
    const post = req.body;
    let user;
      
    await db.query(
      `INSERT INTO user(user_id,password,nickname,gender) 
            VALUES(?,?,?,?);`,
      [post.id, post.password, post.nickname, post.gender],
      function (error, result) {
        if (error) {
          console.log('mysql err');
          throw error;
        }
        console.log("insert complete");
      }
    );

    //회원가입 성공 시 바로 로그인.
    
    await db.query(
      `SELECT * FROM user WHERE user_id=?`,[post.id],
      function(error,result){
        if(error){
          console.log('mysql err');
          throw error;
        }
        user = result[0];
      }
    );
    req.login(user, function(err){ //회원가입 성공 시 바로 로그인.
      return res.send('ok');
    });
    
  /*
      else {
      if (!checkId) {
        res.status(400).send({ error: 'Already used id' });
      } else {
        res.status(400).send({ error: 'Already used Nickname' });
      }
    }
  */

  });
  return router;
}