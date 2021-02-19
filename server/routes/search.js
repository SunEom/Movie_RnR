const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const qs = require('querystring');

router.post('/', async function (req, res, next) {
    const post = req.body;
    let keyword = "%" + post.keyword + "%";
    await db.query(`select movie.id, title,overview, movie.created, genres, rates, movie.updated, user_id, comment.movie_id as ck, count(*) as commentCount from movie left join comment on movie.id=movie_id group by movie.id having title like ? or overview like ? ORDER BY movie.created;`,
    [keyword,keyword],
    function(error,result){
        for(let i=0; i<result.length; i++){
            if(!result[i].ck){
                result[i].commentCount = 0;
            }
        }
        if(error){
            next(error);
        }
        res.status(200).send({ code: 200, data: result });
    })
});
module.exports = router;

