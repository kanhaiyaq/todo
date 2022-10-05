const express=require('express');
const body=require('body-parser');
const mongoose=require('mongoose');
const user=require('./model/users');
const ObjectId = require('mongodb').ObjectId;
const session= require('express-session');

const MongoDBStore = require("connect-mongodb-session")(session);
const app=express();
const MONGODB_URI='mongodb+srv://kanhaiyaq:hn3UG4vYwSi9KCAk@cluster0.sbhwfri.mongodb.net/';

var store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'mySessions'
  });
  




app.use(session({
    secret:'secret-key',
    resave:false,
    saveUninitialized:false,
    store:store
}));



app.use(body.urlencoded({extended:true}))
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views','view');

const isAuth=(req,res,next)=>{ 
    if (req.session.isAuth) {
    next();
  } else {
    req.session.error = "You have to Login first";
    res.redirect("/login");
  }
}

const addate=["hello"];


const todolist=require('./routes/to_do_list');
const userlist=require('./routes/user');


// const customMiddleWare = (req,res,next)=>{
//     console.log('Custom middle ware called');
//     console.log(req.user);
//     next();
// }
//app.use(customMiddleWare);

app.use(userlist); 
app.use(isAuth,todolist);  


//  app.get('/:custom',(req,res,next)=>{
//     console.log(req.params.custom);
//  });





 mongoose.connect(MONGODB_URI).then(
   result=>
    {
        app.listen(3000,function(req,res)
        {
            console.log(3000);
        });
    }
)
.catch(err=>{
    console.log(err);
});
