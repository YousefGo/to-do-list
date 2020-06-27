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
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[today.getDay()];
var StringDate=today.toLocaleDateString("en-US", options);
var day = "";
var items=["buy food","cook food","eat foot"];
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
  
    res.render("list", { sday:StringDate,items:items,myday:n});
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