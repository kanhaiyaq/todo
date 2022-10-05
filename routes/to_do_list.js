const express=require('express');
const todocontroller=require('../controllers/to_do_list_controller');
const Router=express.Router();


Router.get('/',todocontroller.gettodolist);

Router.post('/res',todocontroller.postlist);

Router.post('/',todocontroller.deletelist);

module.exports=Router;
//keys==hn3UG4vYwSi9KCAk