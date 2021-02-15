const express = require('express');
const router = express.Router();
const sanitizeHtml = require('sanitize-html');
const db = require('../lib/db');
const qs = require('querystring');

router.post('/', async function (req, res, next) {
    const post = req.body;
    await db.query(`SELECT * FROM movie WHERE title LIKE '%?%' OR overview LIKE '%?%'`,
    [post.keyword, post.keyword],
    function(error,result){
        if(error){
            next(error);
        }
        res.status(201).send({ code: 201, data: result });
    })
});
module.exports = router;