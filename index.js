const express=require('express');
const app=express();
const port=8000;
const db=require('./config/mongoose');
const expressLayouts=require('express-ejs-layouts');

app.use(expressLayouts);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use express router
app.use('/',require('./routes/index'));

//serve static files
app.use(express.static('assets'));

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