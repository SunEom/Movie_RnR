const express = require('express');
const router = express.Router();
const sanitizeHtml = require('sanitize-html');
const db = require('../lib/db');
const qs = require('querystring');
const authCheck = require('../lib/authCheck');

router.post('/', function (req, res) {
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
                res.send({error: 'insertQueryErr'});
            }
            res.status(201).send({code : 'insert complete'});
            }
        );
    
  
});

router.post('/update_process', function (req, res) {
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
            res.send({error: 'updateQueryErr'});
            }
            res.status(201).send({code : 'update complete'});
        }
        );
    
});

router.delete('/', function (req, res) {
    // if(!authCheck.IsOwner(req,res)){
    //     res.status(400).send({error: 'not login'});
    // } 
        //글 삭제
        const post = res.body;
        db.query(`DELETE FROM movie WHERE id = ?;`, [post.id], function (error, result) {
            if (error) {
                res.send({error: 'deleteQueryErr'});
            }
            res.status(200).send({code : 'delete complete'});
        });
    
});

router.get('/', async function (req, res) {
  await db.query(`SELECT * FROM movie ORDER BY created desc LIMIT 20;`, function (error, result) {
    if (error) {
        res.send({error: 'queryerr'});
    }
    res.json(result);
  });
});

router.get('/:id', async function (req, res) {
  await db.query(`SELECT * FROM movie WHERE id=?;`, [req.params.id], function (error, result) {
    if (error) {
        res.send({error: 'queryerr'});
    }
    res.json(result);
  });
});

module.exports = router;
