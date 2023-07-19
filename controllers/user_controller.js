module.exports.profile=function(req,res){
    return res.end('<h1>The user controller is running</h1>');
}

module.exports.signup=function(req,res){
    return res.render('userSignup');
}

module.exports.login=function(req,res){
    return res.render('userLogin');
}

module.exports.createUser=function(req,res){
    return res.end('<h1>User Signed Up Successfully</h1>');
}

module.exports.createSession=function(req,res){
    return res.end('<h1>User logged in Successfully</h1>')
}