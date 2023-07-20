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

module.exports.createUser=function(req,res){
    console.log(req.body);
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
module.exports.createSession=function(req,res){
    return res.end('<h1>User logged in Successfully</h1>')
}



// if(!user){
        //     Users.create(req.body).then(user=>console.log('User created successfully',user)).catch(error=>console.log(error));
        //     return res.redirect('userLogin');
        // }
        // else{
        //     console.log('User already exists');
        //     return res.redirect('back');
        // }