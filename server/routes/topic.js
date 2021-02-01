const express = require('express');
const { request } = require('http');
const router = express.Router();
const sanitizeHtml = require('sanitize-html');
const db = require('../lib/db');
var qs = require('querystring');

router.post('/create_process', function(req,res){
    var post = req.body;
    db.query(
        `INSERT INTO movie(title,description,genre,created)
        VALUES(?,?,NOW(),?);`,
        [post.title,post.description,post.genre],
        function(error,result){
            if(error){
                throw error;
            }
            res.redirect(`/topic/?id=${result.insertId}`);
        }
    );
});

router.post('/update_process',function(req,res){
    var post = req.body;
    db.query(
        `UPDATE movie SET title=?, description=?, genre=? WHERE id=?`
        ,[post.title,post.description,post.genre,post.id],
        function(error,result){
            if(error){
                throw error;
            }
            res.redirect(`/topic/?id=${post.id}`);
        }
    );
});

router.post('/delete_process', function(req,res){
    var post = request.body;
    db.query(`DELETE FROM movie WHERE id = ?`,[post.id],function(error,result){
        if(error){
            throw error;
        }
        res.redirect('/');
    });
});
module.exports = router;