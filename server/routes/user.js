const express = require('express');
const router = express.Router();
const db = require('../lib/db');
const qs = require('querystring');

router.post('/', async function(req,res){
    console.log(req.body);
    const post = req.body;
    console.log(post.id);
    let checkId = true;
    let checkNickname = true;
    await db.query(
        `SELECT id, nickname FROM user`,
        function(error,result){
            if(error){
                throw error;
            }
            let i=0;
            while(i<result.length){
                if(post.id == result[i].id){
                    checkId = false;
                }
            }
        }
    );

    await db.query(
        `SELECT nickname FROM user`,
        function(error,result){
            if(error){
                throw error;
            }
            let i=0;
            while(i<result.length){
                if(post.nickname == result[i].nickname){
                    checkNickname = false;
                }
            }
        }
    );


    if(checkId && checkNickname){
        console.log('ok user1');
        await db.query(
            `INSERT INTO user(id,password,nickname,gender) 
            VALUES(?,?,?,?);`,
            [post.id, post.password, post.nickname, post.gender],
            function(error,result){
                if(error){
                    throw error;
                }
                console.log('ok user2');
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