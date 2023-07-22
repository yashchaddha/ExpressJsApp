const express=require('express');
const app=express();
const port=7200;
const cookieParser=require('cookie-parser');

const db=require('./config/mongoose');
const expressLayouts=require('express-ejs-layouts');

//for creating a session cookie for the admin
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');
const MongoStore=require('connect-mongo');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(cookieParser());

//serve static files
app.use(express.static('assets'));

app.use(expressLayouts);

//setting view engine
app.set('view engine','ejs');
app.set('views','./views');

//middleware for creating a session cookie for admin login
app.use(session({
    name:'expresstodolist',
    secret: 'yash',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: new MongoStore({
        mongoUrl: 'mongodb://localhost:27017/todolist',
        autoRemove:'disabled'
    },
    function(err){
        if(err){
            console.log(err || "connect-mongo-setup okay")
        }
    })
}));

app.use(passport.setAuthAdmin)


app.use(passport.initialize());
app.use(passport.session());


//use express router
app.use('/',require('./routes'));

//launching our server
app.listen(port,function(err){
    if(err){
        console.log("We encountered the error in running the Express JS app", err);
    }
    else{
        console.log("Server is up and running on port", port)
    }
})