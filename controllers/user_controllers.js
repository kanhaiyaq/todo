const user=require('../model/users');
const ObjectId = require('mongodb').ObjectId;
const bcrypt=require('bcrypt');
exports.getlogin=(req,res,next)=>{
    // console.log(req.session.user);
    res.render('login',{title:'Login Page'});
}



exports.postlogin=(req,response,next)=>{
    const email=req.body.exampleInputEmail1;
    const password=req.body.exampleInputPassword1;


    user.find({email:email}).then(
        result=>{

            bcrypt.compare(password, result[0].password, function(err, res) {
                        if (!err) {
                            req.session.isAuth=true;
                            response.redirect('/');
                        } else {
                        console.log(err);
                        }
              });
          }
    ).catch(err=>{
        console.log(err);
    });
        
    console.log(req.session);
   

}


exports.getsignup=(req,res,next)=>{
    res.render('signup',{title:'Signup Page'});
}




exports.postsignup=(req,res,next)=>{
    const email=req.body.exampleInputEmail1;
    let password=req.body.exampleInputPassword1;
 
    bcrypt.hash(password,10,(error,hash)=>{
        password=hash;
        var data={
            _id:new ObjectId(),
            email:email,
            password:password
        }
        const u=new user(data);
        u.save().then(result=>{
            console.log("user successfully created");
         }).catch(err=>{
            console.log(err);
        });
        res.redirect('/login');
    });
  
}

