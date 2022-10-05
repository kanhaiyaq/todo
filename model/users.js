const mongoose=require('mongoose'), Schema = mongoose.Schema;
const ObjectId = require('mongodb').ObjectId;
const bcrypt=require('bcrypt');
const Itemschema= new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email:String,
    password:String
   
})
const users=mongoose.model('Users',Itemschema);

module.exports=users;

