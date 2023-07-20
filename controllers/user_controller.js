const Users=require('../models/users');

module.exports.profile=function(req,res){
    return res.end('<h1>The user controller is running</h1>');
}

module.exports.signup=function(req,res){
    console.log(req.cookies);
    return res.render('userSignup');
}

module.exports.login=function(req,res){
    return res.render('userLogin');
}
//User Signup
module.exports.createUser=function(req,res){
    if(req.body.password!=req.body.confirmpassword){
        console.log('Password Does not match');
        return res.redirect('back');
    }

    Users.findOne({email:req.body.email}).then(user=>{
        if(user){
            console.log('User already exists');
            return res.redirect('back');
        }
        else{
            Users.create(req.body).then(user=>{
                console.log('User Created SuccessFully',user);
                return res.redirect('login');
            }).catch(error=>{
                console.log('Error in creating new user',error);
                return res.redirect('back');
            })
        }
    })
}

//User Login
module.exports.createSession=function(req,res){
    Users.findOne({email:req.body.email}).then(user=>{
        //check if password is matching
        if(req.body.psw==user.password){
            //create session for the user
            res.cookie('user_id',user._id);
            return res.render('userProfile',{user});
        }
        else{
            console.log('Invalid Password');
            return res.redirect('back');
        }
    }).catch(error=>{
        console.log("User Not found with this Email");
        return res.redirect('back');
    })
}

//Logging out User
module.exports.logout=function(req,res){
    res.clearCookie('user_id');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    return res.end("<h1>Logged out Successfully</h1>");
}