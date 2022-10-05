const express=require('express');
const Router=express.Router();
const usercontrol=require('../controllers/user_controllers');

Router.get('/login',usercontrol.getlogin);

Router.post('/login',usercontrol.postlogin);

Router.get('/signup',usercontrol.getsignup);

Router.post('/signup',usercontrol.postsignup);

module.exports=Router;

