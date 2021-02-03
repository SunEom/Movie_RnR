const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const qs = require('querystring');

router.post('/', function(req,res){
    const post = req.body;
    db.query(
        `INSERT INTO user(id,password,nickname,gender) 
        VALUES(?,?,?,?);`,
        [post.id, post.password, post.nickname, post.gender],
        function(error,result){
            if(error){
                throw error;
            }
            res.redirect('/login');
        }
    );
});

module.exports = router;