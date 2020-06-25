// requrie express file 
const express = require("express");
// create new object off express
const app = express();
// require body-parser 
const bodyParser = require("body-parser");
// set ejs into view engine 
app.set('view engine', 'ejs');
// date 

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
var StringDate=today.toLocaleDateString("en-US", options);
var day = "";
var items=[];
app.use(bodyParser.urlencoded({extended:true}))
app.get("/", function (req, res) {
    /* 0 == sunday 
       1= monday 
       2=tuesday 
       3=wednesday 
       4= thures day 
       5 = firday 
       6= stauts day    
    
    */
  
    res.render("list", { sday:StringDate,items:items});
}


)
app.post("/",function(req,res)
{
var item = req.body.num1;
items.push(item);
res.redirect("/");
}
)



app.listen(3000, function () {
    console.log("work in port 3000");
}
)