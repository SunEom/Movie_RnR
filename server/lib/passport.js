const db = require('../lib/db');
const bcrypt = require('bcrypt');

module.exports = function(app){
    const session = require('express-session');
    const passport = require('passport');
    const LocalStrategy = require('passport-local').Strategy;


    app.use(passport.initialize());
    app.use(passport.session());


    passport.serializeUser(function(user, done){ //로그인 성공 시
        console.log('serializeuser',user);
        done(null,user.user_id); //user_id는 식별자
    })

    passport.deserializeUser(function(id, done){ //페이지에 방문할 때 마다 콜백함수가 호출. id에는 serializeUser의 식별자값이 들어옴.
        let user;
        db.query('SELECT * FROM user WHERE user_id=?;',[id],function(err,result){
            if(err){
                throw err;
            }
            console.log('deserializeuser',result[0]);
            done(null,result[0]);
        });
    });


    passport.use(new LocalStrategy({
        usernameField: 'id',        //post로 들어오는 form 태그의 name
        passwordField: 'password'
        },
        function(username,password,done){
            db.query('SELECT * FROM user WHERE user_id=?;',[username],
            function(err,result){
                if(err){
                    console.log('mysql error')
                    return done(err);
                }
                //확인 한 후 db함수 밖으로 빼기.
                if(result[0]){
                    bcrypt.compare(password, result[0].password, function(err,check){
                        if(check){ //사용자가 입력한 pwd와 db에 저장된 pwd가 일치하면  result는 true.
                            console.log("user:"+result[0]);
                            return done(null,result[0]);            //result[0] : 사용자에 대한 정보
                                                    //result[0] serializeUser 콜백함수의 첫번째 인자로 줌.
                        } else{
                            return done(null,false,{message:'Incorrect password'});
                        }
                    })
                } else{
                    return done(null,false,{message:'Incorrect id'});
                }          
                
            });
        }
    ));
    return passport;
}
