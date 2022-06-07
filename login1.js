//For user authentication

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var passportLocalMongoose = require('passport-local-mongoose');



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.static(__dirname + '/'));

app.use(session({
    secret: "Secret",
    resave: false,
    saveUninitialized: false
  }));

  app.use(passport.initialize());
  app.use(passport.session());

mongoose.connect("mongodb+srv://test1234:test1234@cluster0.jqywi.mongodb.net/userdb",{useNewUrlParser: true});


const userSchema=new mongoose.Schema({
    name: String,
    uid: String,
    password: String
});
userSchema.plugin(passportLocalMongoose);

const User=new mongoose.model("User",userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



//for session time out
app.get("/login",function(req,res){
    if(req.isAuthenticated()){
        res.render("userdashboard");
    }else{
        res.redirect("/login");
    }
});



app.get("/",function(req, res){
    res.render("home");//name of home ejs file
});
app.get('/userlogin', function (req, res) {
    res.render("Userlogin");
  });
  
app.post("/userlogin",function(req,res){
   res.redirect("/userlogin");
    
});
app.get("/adminlogin",function(req,res){

    res.render("Adminlogin");
});
app.post("/adminlogin",function(req,res){
    res.redirect("/adminlogin");
        
    });
//after clicking on login as user button on home screen
app.get("/login",function(req, res){
    
    res.render("Userlogin");//name of login ejs file for user
});


app.post("/login",function(req,res){
    const user = new User({
        uid: req.body.uid,
        password: req.body.dob
      });

    User.findOne({uid:req.body.uid},function(err,foundUser){
        if(err){console.log(err);
            res.redirect('/login');
        }else{
            if(foundUser){
                if(foundUser.password===password){
                    res.render("userdashboard");
                }
            }
        };
    });
});


app.listen(222,function(){
    console.log("server is running on port 222");
  });

