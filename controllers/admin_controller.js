const Admins=require('../models/admin')


module.exports.admin=function(req,res){
    return res.render('adminProfile');
}


module.exports.signup=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/admin/profile');
    }
    return res.render('adminSignup');
}

module.exports.login=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/admin/profile');
    }
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
    // return res.render('adminProfile',{details:req.body});
    return res.redirect('/todolist');
}

module.exports.profile=function(req,res){
   return res.end("<h1>Heyyyy</h1>");
}

//admin logging out
module.exports.destroySession=function(req,res){
    req.logout(function (err) {
        if (err) {
          // Handle any potential error during logout
          console.log('Error during logout:', err);
        }
        // Redirect the user to the login page after successful logout
        return res.redirect('/admin/login');
      });
}