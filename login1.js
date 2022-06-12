//For user authentication

console.log(process.env.SECRET);
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const https = require("https");
const Window = require('window');
const window = new Window();
var multer = require("multer");
var storage=multer.memoryStorage();
var upload=multer({dest:'uploads/'});


//import index from '../modules/indexdb';
//const index = require('./modules/indexdb.js');
//const Localbase=require('localbase');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(__dirname + '/'));
app.use(express.json());

const mongoose=require('mongoose');
const session=require('express-session');

const passport=require('passport');
const passportLocalMongoose=require('passport-local-mongoose');



  app.use(session({
      secret: "Secret",
      resave: false,
      saveUninitialized: false
  }));
  
  app.use(passport.initialize());
  app.use(passport.session());
  
  
  mongoose.connect("mongodb+srv://project2:mshackathon@cluster1.e6cet.mongodb.net/formdb", { useNewUrlParser: true });
  var con1 = new mongoose.Mongoose();
  var con2 = new mongoose.Mongoose();
  con1.connect('mongodb+srv://project2:mshackathon@cluster1.e6cet.mongodb.net/userdb', { useNewUrlParser: true });
  con2.connect('mongodb+srv://project2:mshackathon@cluster1.e6cet.mongodb.net/formdb', { useNewUrlParser: true });
  const userdbSchema = con1.Schema;
  const formdbSchema = con2.Schema;
  
  
  
  const userSchema = new userdbSchema({
      uid: String,
      password: String,
      requestno: Number,
  });
  
  const formSchema = new formdbSchema({
      formid: { type: Number, unique: true },
      requestno: String,
      uid: type = String,
      name: String,
      Gender: String,
      Address: String,
      Contactnumber: Number,
      Needtype: String,
      Needcategory: String,
      Amountneeded: Number,
      Percentage: Number,
      Attendance: Number,
      Dropoutyears: Number,
      Agenda: String,
      Reason: String,
      Hospitalname: String,
      Medicalailment: String,
      Durationoftreatment: String,
      Status: String,
      Approval: String,
      Doc: String,
  
  });
  
  userSchema.plugin(passportLocalMongoose);
  formSchema.plugin(passportLocalMongoose);
  
  
  const User = con1.model("user", userSchema);
  const Form = con2.model("form", formSchema);
  
  
  passport.use(User.createStrategy());
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());
  



var l = "on";
//language testing



/*const newuser=new User({
    uid:"4567",
    password:"21-03-2001"
})
newuser.save();*/

//for session time out
app.get("/login", function (req, res) {
    if (req.isAuthenticated()) {
        res.render("main_form");
    } else {
        res.redirect("/userlogin");
    }
});




app.get("/", function (req, res) {
    res.render("home");//name of home ejs file
});
app.get('/userlogin', function (req, res) {
    res.render("Userlogin");
});

app.get("/adminlogin", function (req, res) {

    res.render("Adminlogin");
});

//after clicking on login as user button on home screen
/*app.get("/login",function(req, res){
    
    res.render("main_form");//name of login ejs file for user
});*/

var id = 0;
var prevreq;
app.post("/userlogin", function (req, res) {


    User.findOne({ uid: req.body.uid }, function (err, foundUser) {
        id = foundUser.uid;
        prevreq = foundUser.requestno;
        if (err) {
            console.log(err);
            console.log("incorrect password");
            res.redirect('/');

        } else {
            if (foundUser) {
                if (foundUser.uid === req.body.uid) {
                    res.render("userDashboard");
                }
                else {
                    console.log("still not found");
                    res.redirect('/userlogin');
                }
            }
        };
    });
});

//admin login
//admin username and password define here
const username = "adminlogin";
const p = "123xyz";

app.get("/admindashboard", function (req, res) {
    Form.find({}).sort({ formid: -1 }).exec(function (err, form) {
        res.render('adminDashboard', {
            formList: form
        });
    });
});
app.post("/admindashboard", function (req, res) {
    var val = req.body.value;
    console.log(val);
    if (val === "TypeofNeed") {
        var type = req.body.needtype;
        Form.find({ Needcategory: type }, function (err, form) {
            res.render('adminDashboard', {
                formList: form
            });
        });

    } else if (val === "Approved") {
        Form.find({ Approval: val }, function (err, form) {
            res.render('adminDashboard', {
                formList: form
            });
        });
    }
    else if (val === "Pending") {
        Form.find({ Approval: val }, function (err, form) {
            res.render('adminDashboard', {
                formList: form
            });
        });
    } else {
        console.log('aa to rha h' + val);
        Form.find({}).sort({ val: 1 }).exec(function (err, form) {
            res.render('adminDashboard', {
                formList: form
            });
        });

    }
 


})
app.post("/adminlogin", function (req, res) {


    if (req.body.uniid === username && p === req.body.password) {
        res.redirect('admindashboard');
    } else {
        console.log("Incorrect password! Try again");
        res.redirect('adminlogin');
    };
});

app.get("/userdash", function (req, res) {

    res.render("userDashboard");
});


//after entering user dashboard
app.get("/mainform", function (req, res) {
    res.render("main_form");
});


// res.render("main_form");

var reqid = 0;
//console.log(""+id+""+reqid);

app.post("/mainform", function (req, res) {
    console.log('form recieved', req.body);
    reqid++;
    Form.findOneAndUpdate({ requestno: { $gte: "" + id + "" + reqid } },
        { requestno: prevreq + 1 });
    /*
       console.log(req.body.Gender);
      const newform=new Form({
        requestno: ""+id+""+reqid,
        uid:1234567,
        name: req.body.name,
        Gender: req.body.Gender,
        Address: req.body.Address,
        Contactnumber: req.body.phone,
        Needtype: req.body.needtype,
        Needcategory: req.body.needcategory,
        Status: "New",
        Approval: "Pending",
        Doc: "Pending"
        
    });
    newform.save();*/
    //db.collection('formdb').add(newform);
    var need = req.body.data.needcategory;
    if (need === "Education") {
        console.log("yes it's working");
        res.redirect("/eduform");
    }
    else if (need === "Health") { res.render("healthForm"); }
    else if (need === "Life skills") { res.render("lifeskillsForm"); }
    else if (need === "Livelihood") { res.render("livelihoodForm"); }
});

app.get("/eduform", function (req, res) {
    res.render("educationForm");
});
app.get("/healthform", function (req, res) {
    res.render("healthForm");
});
app.get("/lsform", function (req, res) {
    res.render("lifeskillsForm");
});
app.get("/llform", function (req, res) {
    res.render("livelihoodForm");
});

app.post("/eduform", function (req, res) {
    Form.findOneAndUpdate({ requestno: { $gte: "" + id + "" + reqid } },
        {
            Percentage: req.body.percentage,
            Attendance: req.body.attendance,
            Dropoutyears: req.body.drpoutyrs
        }, null, function (err, docs) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Original Doc : ", docs);
            }
        });
    res.render("userDashboard");
});
//for healthform
app.post("/healthform", function (req, res) {
    Form.findOneAndUpdate({ requestno: { $gte: "" + id + "" + reqid } },
        {
            Agenda: req.body.agenda,
            Reason: req.body.reason,
            Hospitalname: req.body.hospital,
            Medicalailment: req.body.medail,
            Durationoftreatment: req.body.durationoftreatment,
        }, null, function (err, docs) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Original Doc : ", docs);
            }
        });
    res.render("userDashboard");
});
//for lifeskillsform
/*app.post("/lsform",function(req,res){
    Form.findOneAndUpdate({requestno: {$gte:""+id+""+reqid} }, 
        { Percentage: req.body.percentage,
            Attendance: req.body.attendance,
            Dropoutyears:req.body.drpoutyrs }, null, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Original Doc : ",docs);
        }
    });
    res.render("userDashboard");
});
//for livelihoodform
app.post("/llform",function(req,res){
    Form.findOneAndUpdate({requestno: {$gte:""+id+""+reqid} }, 
        { Percentage: req.body.percentage,
            Attendance: req.body.attendance,
            Dropoutyears:req.body.drpoutyrs }, null, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Original Doc : ",docs);
        }
    });
    res.render("userDashboard");
});*/



////////uploading documents


app.get('/uploaddoc',function(req,res){ 
 res.render("uploadDoc");

});
app.post('/uploaddoc',upload.array("image"),function(req,res){
    console.log("it worked");
    //var uid=req.body.uid;
    Form.findOneAndUpdate({uid:4567 }, 
        { Doc: "Uploaded"}, null, function (err, docs) {
        if (err){
            console.log(err)
        }
        else{
            console.log("Original Doc : ",docs);
        }
    });


    res.redirect('/userdash');


});






/////////////////////////////////////////////////////////////

//localstorage.setItem("form1","javascrpt");



app.listen(7000, function () {
    console.log("server is running on port 7000");
});

