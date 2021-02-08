const db = require('../lib/db');

module.exports = function(app){
    const session = require('express-session');
    const passport = require('passport');
    const LocalStrategy = require('passport-local').Strategy;


    app.use(passport.initialize());
    app.use(passport.session());


    passport.serializeUser(function(user, done){ //로그인 성공 시
        done(null,user.user_id); //user_id는 식별자
    })

    passport.deserializeUser(function(id, done){ //페이지에 방문할 때 마다 콜백함수가 호출. id에는 serializeUser의 식별자값이 들어옴.
        let user;
        db.query('SELECT * FROM user WHERE user_id=?;',[id],function(err,result){
            if(err){
                throw err;
            }
            let json = JSON.stringify(result[0]);
            user = JSON.parse(json);
            done(null,user);
        });
    });


    passport.use(new LocalStrategy({
        usernameField: 'id',        //post로 들어오는 form 태그의 name
        passwordField: 'password'
        },
        function(username,password,done){
            db.query('SELECT * FROM user WHERE user_id=? and password=?;',[username,password],
            function(err,result){
                if(err){
                    console.log('mysql error')
                    return done(err);
                }
                
                if(!result[0].user_id){
                    return done(null,false,{message:'Incorrect id'});
                }
                if(!result[0].password){
                    return done(null,false,{message:'Incorrect password'});
                }
                /*
                if(result.length===0){
                    console.log('id, password 결과 없음');
                    return done(null,false,{message:'Incorrect'});
                
                }*/            
                console.log(result);

                let json = JSON.stringify(result[0]);
                let user = JSON.parse(json);
                console.log("user:"+user);
                return done(null,user);            //user : 사용자에 대한 정보
                                        //user를 serializeUser 콜백함수의 첫번째 인자로 줌.
            });
        }
    ));
    return passport;
}
