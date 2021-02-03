const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const qs = require('querystring');

router.post('/', async function(req,res){
    const post = req.body;
    let checkId = true;
    let checkNickname = true;
    await db.query(
        `SELECT id, nickname FROM user WHERE id=? nickname=?;`,[post.id, post.nickname],
        function(error,result){
            if(error){
                throw error;
            }
            if(result[0].id){
                checkId = false;
            }
            if(result[0].nickname){
                checkNickname = false;
            }
        }
    );


    if(checkId && checkNickname){
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
    } else{
        if(!checkId){
            res.status(400).send({ error: 'Already used id' });
        } else{
            res.status(400).send({ error: 'Already used Nickname' });
        }
        
    }
    
});

module.exports = router;