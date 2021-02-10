const express = require('express');
const router = express.Router();
const sanitizeHtml = require('sanitize-html');
const db = require('../lib/db');
const qs = require('querystring');
const authCheck = require('../lib/authCheck');

router.post('/', function (req, res, next) {
  if (!authCheck.IsOwner(req, res)) {
    console.log('not login');
    return res.status(400).send({ code: 400, error: 'not login' });
  }
  //글 쓰기
  const post = req.body;
  if (post.rates > 10) {
    post.rates = 10;
  }
  db.query(
    `INSERT INTO movie(title,overview,genres,rates,created,user_id)
            VALUES(?,?,?,?,NOW(),?);`,
    [post.title, post.overview, post.genres, post.rates, req.user.user_id],
    function (error, result) {
      if (error) {
        next(error);
      }
      res.status(201).send({ code: 201, data: result });
    }
  );
});

router.post('/update_process', function (req, res, next) {

    if(!authCheck.IsOwner(req,res)){
        return res.status(400).send({code: 400, error: 'not login'});
    }
    const post = req.body;
    if (post.rates > 10) {
    post.rates = 10;
    }
    db.query(`SELECT user_id FROM movie WHERE id=?`,[post.id], 
    function(error,result){
        if(error){
            next(error);
        }
        if(result[0].user_id != req.user.user_id){
            return res.status(400).send({code: 400, error: '다른 사용자가 작성한 글입니다.'});
        }
    })
    //글 수정


  db.query(
    `UPDATE movie SET title=?, overview=?, genres=?, rates=?, updated=NOW() WHERE id=?;`,
    [post.title, post.overview, post.genres, post.rates, post.id],
    function (error, result) {
      if (error) {
        next(error);
      }
      db.query(`SELECT * FROM movie WHERE id=?`, [post.id], function (error, result) {
        if (error) {
          next(error);
        }
        res.status(201).send({ code: 201, data: result });
      });
    }
  );
});

router.delete('/:id', function (req, res, next) {

    if(!authCheck.IsOwner(req,res)){
        return res.status(400).send({code: 400, error: 'not login'});
    }
    db.query(`SELECT user_id FROM movie WHERE id=?`,[post.id], 
    function(error,result){
        if(error){
            next(error);
        }
        if(result[0].user_id != req.user.user_id){
            return res.status(400).send({code: 400, error: '다른 사용자가 작성한 글입니다.'});
        }
    })
    //글 삭제
    db.query(`DELETE FROM movie WHERE id = ?;`, [req.params.id], function (error, result) {
        if (error) {
            next(error);
        }
        res.status(200).send({code : 200});
    });
    
});

router.get('/', async function (req, res, next) {
  await db.query(`SELECT * FROM movie ORDER BY created desc LIMIT 20;`, function (error, result) {
    if (error) {
      next(error);
    }
    res.json(result);
  });
});

router.get('/:id', async function (req, res, next) {
  await db.query(`SELECT * FROM movie WHERE id=?;`, [req.params.id], function (error, result) {
    if (error) {
      next(error);
    }
    res.json(result);
  });
});

module.exports = router;
