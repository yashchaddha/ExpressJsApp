const passport=require('passport');

const LocalStrategy=require('passport-local').Strategy;

const Admin=require('../models/admin')



passport.use(new LocalStrategy({
    usernameField:'email'
},
function(email,password,done){
    Admin.findOne({email:email}).then(admin=>{
        if(!admin||(admin.password!=password)){
            console.log("Invalid Username/Password");
            return done(null,false)
        }
        else{
            console.log('Verified')
            return done(null,admin);
        }
    }).catch(error=>{
        console.log('Error in finding the user');
        return done(error);
    });
}));

//Serializing the User
passport.serializeUser(function(admin,done){
    done(null,admin.id);
});

//Deserializing the User
passport.deserializeUser(function(id,done){
    Admin.findById(id).then(admin=>{
        return done(null,admin);
    }).catch(error=>{
        console.log(error);
    })
});

//check if the user is authenticated
passport.checkAuth=function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    else{
        return res.redirect('/admin/signup');
    }
}

passport.setAuthAdmin=function(req,res,next){
    if(req.isAuthenticated){ 
        console.log("From Local Strategy",req.user);      
        res.locals.user=req.user;          
    }
    next(); 
}

module.exports=passport;