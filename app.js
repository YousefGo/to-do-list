const express = require("express");
const app=express();

const bodyParser = require("body-parser");
app.set('view engine', 'ejs');
// date 
var today =new Date();
var data  = today.getDay();
app.get("/",function(req,res)
{
   
res.send('get methods works'+data);
}


)
app.listen(3000,function()
{
    console.log("work in port 3000");
}
)