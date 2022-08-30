const express=require('express');
const body=require('body-parser');
const mongoose=require('mongoose');

const app=express();
app.use(body.urlencoded({extended:true}))
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views','view');

const addate=["hello"];
const Itemschema= new mongoose.Schema({
    name:String
})
const lists=mongoose.model('Lists',Itemschema);


app.get('/',function(req,res,next){

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
    .catch(err=>{console.log(err)});
   
   
});

app.post('/res',(req,res,next)=>{
   
    const description=req.body.description;
    const first=new lists({name:description});
    first.save().
    then(result=>console.log("inserted successfully"))
    .catch(err=>console.log(err));
    // if(description.length>0&&adddata.length<18)
    // {
    //  adddata.push(description);
    // }
     res.redirect('/');
 });

app.post('/',(req,res,next)=>{
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
    // adddata.splice(index,1);
    //  res.redirect('/');
 });

//  app.get('/:custom',(req,res,next)=>{
//     console.log(req.params.custom);
//  });

 app.get('/login',(req,res,next)=>{
    res.render('login');
 })


mongoose.connect('mongodb+srv://kanhaiyaq:HnC0m2qXcZeMlsBX@cluster0.bs8kgsz.mongodb.net/todo').then(
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
