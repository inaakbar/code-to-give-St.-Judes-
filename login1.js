//For user authentication


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const https = require("https");
const Window = require('window');
const window = new Window();
var multer = require("multer");
var storage = multer.memoryStorage();
var upload = multer({ dest: 'uploads/' });


//import index from '../modules/indexdb';
//const index = require('./modules/indexdb.js');
//const Localbase=require('localbase');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(__dirname + '/'));
app.use(express.json());

const mongoose = require('mongoose');
const session = require('express-session');

const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const { stringify } = require('querystring');
const { default: doc } = require('localbase/localbase/api/selectors/doc');



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
    name: String,
    password: String,
    requestno: Number,
});

const formSchema = new formdbSchema({
    formid: Number,
    uid: String,
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


app.post("/userlogin", function (req, res) {


    User.findOne({ uid: req.body.uid }, function (err, foundUser) {
        console.log(foundUser.name);

        if (err) {
            console.log(err);
            console.log("incorrect password");
            res.redirect('/');

        } else {
            if (foundUser) {
                if (foundUser.password === req.body.password) {
                    res.render("userDashboard", {
                        User: foundUser.name,
                        Userid: foundUser._id
                    });
                }
                else {
                    console.log("still not found");
                    res.redirect('/userlogin');
                }
            }
        };
    });
});

///////////////////////////////////////////////////////////////////////

app.get("/userdash", function (req, res) {

    res.render("userDashboard");
});
app.get("/userdash/prevrequests/(:id)", function (req, res) {
    console.log(req.params.id);
    var userUid = undefined;

    User.findById(req.params.id, (err, user) => {
        console.log("user found", user);
        if (user) {
            Form.find({ uid: user.uid }, function (err, form) {
                console.log("form uid", form);
                res.render("userRequestStatus", {
                    formList: form,
                });
            });
        }
    }).clone().catch(e => { console.log(e); })
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
        window.alert("Incorrect password! Try again");
        res.redirect('adminlogin');
    };
});




//after entering user dashboard
app.get("/mainform", function (req, res) {
    res.render("main_form");
});


// res.render("main_form");


//console.log(""+id+""+reqid);

app.post("/mainform", function (req, res) {
    console.log('form recieved', req.body);
    var x = req.body.data.uid;
    console.log(x);


    const newform = new Form({
        formid: 4,
        uid: req.body.data.uid,
        Needtype: req.body.data.needtype,
        Needcategory: req.body.data.needcategory,
        Amountneeded: req.body.data.amountNeeded,
        Status: "New",
        Approval: "Pending",
        Doc: "Pending",
        Percentage: req.body.data.Percentage,
        Attendance: req.body.data.Attendance,
        Dropoutyears: req.body.data.Dropoutyears,
        Agenda: req.body.data.Agenda,
        Reason: req.body.data.Reason,
        Hospitalname: req.body.data.Hospitalname,
        Medicalailment: req.body.data.Medicalailment,
        Durationoftreatment: req.body.data.Durationoftreatment,

    });
    console.log("coming till here");
    newform.save();
    //db.collection('formdb').add(newform);
    res.redirect('/userdash');
});





////////uploading documents


app.get('/userdash/documentupload/(:id)', function (req, res) {
    Form.findById(req.params.id, function (err, form) {
        console.log("form uid");
        res.render("uploadDoc", {
            Form: form,
        });
    });

});

//uploading doc//////////////////////////////////
app.post('/userdash/documentupload/(:id)', upload.array("image"), function (req, res) {
    console.log("it worked");
    //var uid=req.body.uid;
    Form.findByIdAndUpdate(req.params.id,
        { Doc: "Uploaded" }, null, function (err, docs) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Original Doc : ", docs);
            }
        });

        res.redirect('/userlogin');
});



/////////////////////////////////////////////////////////////

//localstorage.setItem("form1","javascrpt");





app.get('/admindashboard/delete/(:uid)', function (req, res, next) {
    console.log("fetching id");
    Form.findByIdAndRemove(req.params.uid, (err, doc) => {
        console.log('removing elemenet');
        if (!err) {
            res.redirect('/admindashboard');
        } else {
            console.log('Failed to Delete user Details: ' + err);
        }
    });
});



app.listen(4000, function () {
    console.log("server is running on port 4000");
});

