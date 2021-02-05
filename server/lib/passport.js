const db = require('../lib/db');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done){
    done(null,user.id);
})

passport.deserializeUser(function(id, done){
    db.query('SELECT * FROM user WHERE id=?;',[id],function(err,result){
        if(err){
            throw err;
        }
        let user = result[0];
        done(null,user);
    });
});

passport.use(new LocalStrategy(
    function(id,password,done){
        db.query('SELECT * FROM user WHERE id=?, password=?;',[id,password],
        function(err,result){
            if(err){
                throw err;
            }
            let user = result;
        });
        if(user){
            return done(null, user);
        } else{
            return done(null,false,{message: "Incorret user information"});
        }
    }
));