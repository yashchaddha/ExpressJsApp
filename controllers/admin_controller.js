const Admins=require('../models/admin')


module.exports.admin=function(req,res){
    return res.end('<h1>Admin controller is working</h1>');
}


module.exports.signup=function(req,res){
    return res.render('adminSignup');
}

module.exports.login=function(req,res){
    return res.render('adminLogin');
}


//admin Signup
module.exports.createAdmin=function(req,res){
    if(req.body.password!=req.body.confirmpassword){
        console.log('Password Does not match');
        return res.redirect('back');
    }

    Admins.findOne({email:req.body.email}).then(admin=>{
        if(admin){
            console.log('Admin already exists');
            return res.redirect('back');
        }
        else{
            Admins.create(req.body).then(admin=>{
                console.log('Admin Created SuccessFully',admin);
                return res.redirect('login');
            }).catch(error=>{
                console.log('Error in creating new user',error);
                return res.redirect('back');
            })
        }
    })
}

//admin Login
module.exports.createSession=function(req,res){
    console.log('Hello');
    return res.redirect('/');
}