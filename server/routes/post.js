const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const qs = require('querystring');
const authCheck = require('../lib/authCheck');

router.post('/', function (req, res, next) {
  if (!authCheck.IsOwner(req, res)) {
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
    [post.title, post.overview, post.genres, post.rates, req.user.id],
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

router.get('/user/:id', async function (req, res, next) {
  await db.query(`SELECT * FROM movie WHERE user_id=?`, [req.params.id], function (error, result) {
    if (error) {
      next(error);
    }
    res.status(200).send({ code: 200, data: result });
  });
});

router.patch('/update', function (req, res, next) {
  if (!authCheck.IsOwner(req, res)) {
    return res.status(400).send({ code: 400, error: 'not login' });
  }
  const patch = req.body;
  if (patch.rates > 10) {
    patch.rates = 10;
  }
  db.query(`SELECT * FROM movie WHERE id=?`, [patch.id], function (error, result) {
    if (error) {
      next(error);
    }
    if (result[0].user_id != req.user.id) {
      return res.status(400).send({ code: 400, error: '다른 사용자가 작성한 글입니다.' });
    } else {
      //글 수정
      db.query(
        `UPDATE movie SET title=?, overview=?, genres=?, rates=?, updated=NOW() WHERE id=?;`,
        [patch.title, patch.overview, patch.genres, patch.rates, patch.id],
        function (error, result) {
          if (error) {
            next(error);
          }
          db.query(`SELECT * FROM movie WHERE id=?`, [patch.id], function (error, result) {
            if (error) {
              next(error);
            }
            res.status(201).send({ code: 201, data: result });
          });
        }
      );
    }
  });
});

router.delete('/:id', function (req, res, next) {
  if (!authCheck.IsOwner(req, res)) {
    return res.status(400).send({ code: 400, error: 'not login' });
  }
  db.query(`SELECT user_id FROM movie WHERE id=?`, [req.params.id], function (error, result) {
    if (error) {
      next(error);
    }
    if (result[0].user_id != req.user.id) {
      return res.status(400).send({ code: 400, error: '다른 사용자가 작성한 글입니다.' });
    } else {
      //글 삭제
      db.query(`DELETE FROM comment WHERE movie_id = ?`,[req.params.id],function(error,result){ //comment 먼저 삭제
        if(error){
          next(error);
        }
        db.query(`DELETE FROM movie WHERE id = ?;`, [req.params.id], function (error, result) {
          if (error) {
            next(error);
          }
          res.status(200).send({ code: 200 });
        });
      });
    }
  });
});

router.get('/', async function (req, res, next) {

  await db.query(`select movie.id, title, overview, movie.created, genres, rates, movie.updated, user_id, C.commentCount from movie left outer join(select id, count(id) as commentCount ,movie_id from comment group by movie_id) AS C on (movie.id=C.movie_id) GROUP BY id ORDER BY movie.created DESC LIMIT 20;`, 

  async function (error, result) { //홈화면
    if (error) {
      next(error);
    }
    res.status(200).send({code: 200, data: result});
  });
});

router.get('/:id', async function (req, res, next) {
  await db.query(`SELECT * FROM movie WHERE id=?;`, [req.params.id], async function (error, result) {
    if (error) {
      next(error);
    }
    await db.query(
      `SELECT user.id, nickname from user LEFT JOIN movie ON user.id=movie.user_id WHERE movie.id=?`,
      [req.params.id],
      function (error2, result2) {
        if (error2) {
          next(error2);
        }
        res.status(200).send({ code: 200, data: { movie: { ...result }, user: { ...result2 } } });
      }
    );
  });
});

module.exports = router;
