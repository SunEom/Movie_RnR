const express = require('express');
const db = require('../lib/db');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());



module.exports = function(passport){
    
    router.post('/login', 
        passport.authenticate('local',{
            successRedirect:'/',            //성공  성공시 '/'으로 간다. req.user가 생김.  req.user에는 deserializeUser 콜백함수의 done의 두번째 인자.
            failureRedirect:'/auth/login',  //실패
        })
    );

    router.get('/logout',function(req,res){
        req.logout();
        req.session.save(function(){
            res.redirect('/');
        });
    });
    return router;
}

