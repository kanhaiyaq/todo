const mongoose=require('mongoose');
const user=require('./users');
const Itemschema= new mongoose.Schema({
    name:String,
    userid: {type: mongoose.Schema.Types.ObjectId, ref: 'user',required:true}
})
const lists=mongoose.model('Lists',Itemschema);

module.exports=lists;