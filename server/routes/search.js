const express = require('express');
const router = express.Router();
const sanitizeHtml = require('sanitize-html');
const db = require('../lib/db');
const qs = require('querystring');

router.post('/', async function (req, res, next) {
    const post = req.body;
    let keyword = "%" + post.keyword + "%";
    await db.query(`select count(comment.id) as commentCount, M.id, M.title, M.overview, M.created, M.genres, M.rates, M.updated, M.user_id FROM comment right join(select * FROM movie WHERE title LIKE ? OR overview LIKE ?) as M on (comment.movie_id = M.id) group by movie_id;`,
    [keyword,keyword],
    function(error,result){
        if(error){
            next(error);
        }
        console.log(result)
        res.status(200).send({ code: 200, data: result });
    })
});
module.exports = router;

