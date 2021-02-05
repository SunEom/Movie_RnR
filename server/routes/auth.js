const express = require('express');
const db = require('../lib/db');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());
router.use(passport.initialize());
router.use(passport.session());


passport.serializeUser(function(user, done){
    done(null,user.user_id);
})

passport.deserializeUser(function(id, done){
    let user;
    db.query('SELECT * FROM user WHERE id=?;',[id],function(err,result){
        if(err){
            throw err;
        }
        let json = JSON.stringify(result[0]);
        user = JSON.parse(json);
        done(null,user);
    });
});


passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'password'
    },
    function(id,password,done){
        db.query('SELECT * FROM user WHERE user_id=? and password=?;',[username,password],
        function(err,result){
            if(err){
                console.log('mysql error')
                throw err;
            }
            if(result.length===0){
                console.log('id, password 결과 없음');
                return done(null,false,{message:'Incorrect'});
            } else{
                console.log(result);
                let json = JSON.stringify(result[0]);
                let user = JSON.parse(json);
                console.log("user:"+user);
                return done(null,user);
            }
        });
    }
));
router.post('/login', 
    passport.authenticate('local',{
        successRedirect:'/',
        failureRedirect:'/auth/login',
        failureFlash:true
    })
);

router.get('/logout',function(req,res){
    req.logout();
    req.session.save(function(){
        res.redirect('/');
    })
})

module.exports = router;
