// requrie express file 
const express = require("express");
// create new object off express
const app = express();
// require body-parser 
const bodyParser = require("body-parser");
// set ejs into view engine 
app.set('view engine', 'ejs');
// date 

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let today  = new Date();
let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let n = weekday[today.getDay()];
let StringDate=today.toLocaleDateString("en-US", options);
let day = "";
let items=["buy food","cook food","eat foot"];
let works=[];
app.use(bodyParser.urlencoded({extended:true}));
let high=[];
app.use(express.static("public"));
app.get("/", function (req, res) {
    /* 0 == sunday 
       1= monday 
       2=tuesday 
       3=wednesday 
       4= thures day 
       5 = firday 
       6= stauts day    
    
    */
  
    res.render("list", { listTitle:StringDate,items:items,myday:n});
}


)
app.get("/work",function(req,res)
{
res.render("list",{listTitle:"work",items:works});
}
)
app.get("/high",function(req,res)
{
    res.render("list",{listTitle:"high",items:high});
}
)
app.get("/about",function(req,res)

{
    res.render("about");
}
)
app.post("/",function(req,res)
{
    var item = req.body.num1;

if(req.body.list==="work")    
{works.push(item);
res.redirect("/work");
}
else if (req.body.list==="high")
{
high.push(item);
res.redirect("/high");
}
else{
    items.push(item);
    res.redirect("/");
}
}

)



app.listen(3000, function () {
    console.log("work in port 3000");
}
)