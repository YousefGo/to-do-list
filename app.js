const express = require("express");
const app=express();

const bodyParser = require("body-parser");

app.get("/",function(req,res)
{
res.send('get methods works');
}
)
app.listen(3000,function()
{
    console.log("work in port 3000");
}
)