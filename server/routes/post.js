const express = require('express');
const router = express.Router();
const sanitizeHtml = require('sanitize-html');
const db = require('../lib/db');
const authCheck = require('../lib/authCheck');

router.post('/', function (req, res, next) {
  // if(!authCheck.IsOwner(req,res)){
  //     console.log('not login');
  //     res.status(400).send({error: 'not login'});
  // }
  //글 쓰기
  const post = req.body;
  if (post.rates > 10) {
    post.rates = 10;
  }
  db.query(
    `INSERT INTO movie(title,overview,genres,rates,created)
                VALUES(?,?,?,?,NOW());`,
    [post.title, post.overview, post.genres, post.rates],
    function (error, result) {
      if (error) {
        next(error);
      }
      db.query(
        `SELECT * FROM movie WHERE title=? and overview=? and genres=?`,
        [post.title, post.overview, post.genres],
        function (error, result) {
          if (error) {
            next(error);
          }
          res.status(201).send({ code: 201, data: result });
        }
      );
    }
  );
});

router.post('/update_process', function (req, res, next) {
  // if(!authCheck.IsOwner(req,res)){
  //     res.status(400).send({error: 'not login'});
  // }
  //글 수정
  const post = req.body;
  if (post.rates > 10) {
    post.rates = 10;
  }

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
  // if(!authCheck.IsOwner(req,res)){
  //     res.status(400).send({error: 'not login'});
  // }
  //글 삭제
  const post = req.body;
  db.query(`DELETE FROM movie WHERE id = ?;`, [req.params.id], function (error, result) {
    if (error) {
      next(error);
    }
    res.status(200).send({ code: 200 });
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
