const { ObjectID } = require('bson');
const lists=require('../model/list');
const user=require('../model/users');



exports.gettodolist=(req,res,next)=>{
    lists.find(function(err,result){
          
        if(!err){
             res.render('list',
                {title:'To Do App',
                date:new Date().toString().split(" ",5),
                p:result
                });
        }
        else{
            throw new Error("response end");
        }
       })
       .clone().catch(err=>{console.log(err)});
   
}

exports.postlist=(req,res,next)=>{

    const description=req.body.description;
    const first=new lists({name:description,userid:new ObjectID()});
    first.save().
    then(result=>console.log("inserted successfully"))
    .catch(err=>console.log(err));
    // if(description.length>0&&adddata.length<18)
    // {
    //  adddata.push(description);
    // }
     res.redirect('/');

}

exports.deletelist=(req,res,next)=>{

    const name=req.body.checkbox;
    // console.log(req.body.checkbox);
    lists.deleteOne({name:name},function(err){
        if(!err)
        {
            console.log("succesfully deleted");
        }
        else
        {
            console.log("there is a error");
        }
    })
       
   res.redirect('/');
}


