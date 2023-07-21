const passport=require('passport');

const LocalStrategy=require('passport-local').Strategy;

const Admin=require('../models/admin')



passport.use(new LocalStrategy({
    usernameField:'email'
},
function(email,password,done){
    console.log('hello');
    Admin.findOne({email:email}).then(admin=>{
        console.log('1');
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
    console.log('serialize');
    done(null,admin.id);
});

//Deserializing the User
passport.deserializeUser(function(id,done){
    Admin.findById(id).then(admin=>{
        console.log(admin);
        return done(null,admin);
    }).catch(error=>{
        console.log(error);
    })
})

module.exports=passport;