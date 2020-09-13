
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var Typed = require("typed.js");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// app.use(express.static(__dirname) + "/public")



app.get("/", function(req, res){
	res.render("landing");
});

//ABOUT
app.get("/about", function(req, res){
	res.render("about");
});

app.get("/skills", function(req, res){
	res.render("skills");
});

// app.get("/contact", function(req, res){
// 	res.render("contact");
// });

//404 page
app.use(function(req, res, next){
	res.status(404);
	res.send("You have reached a page not found");
});

app.listen(3000, function() {
  console.log("Server is running at http://localhost:3000");
});