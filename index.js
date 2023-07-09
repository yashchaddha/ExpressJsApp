const express=require('express');
const app=express();
const port=8000;

//use express router
app.use('/',require('./routes/index'));

//setting view engine
app.set('view engine','ejs');
app.set('views','./views');

//launching our server
app.listen(port,function(err){
    if(err){
        console.log("We encountered the error in running the Express JS app", err);
    }
    else{
        console.log("Server is up and running on port", port)
    }
})