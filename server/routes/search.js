const express = require('express');
const router = express.Router();
const sanitizeHtml = require('sanitize-html');
const db = require('../lib/db');
const qs = require('querystring');

router.post('/', async function (req, res, next) {
    const post = req.body;
    let keyword = "%" + post.keyword + "%";
    await db.query(`SELECT movie.id, title, overview, movie.created, genres, movie.rates, movie.updated, user_id, count(*) as commentCount FROM movie LEFT OUTER JOIN comment ON movie.id=comment.movie_id WHERE title LIKE ? OR overview LIKE ? GROUP BY movie_id`,
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
