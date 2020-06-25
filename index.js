var express = require("express");
var app = express();

var PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");

app.get("/home", function (req, res) {
  res.render("home.ejs");
});

app.get("/about", function (req, res) {
  res.render("about.ejs", {});
});

app.get("/contact", function (req, res) {
  res.render("contact.ejs", {});
});

app.listen(PORT, function () {
  console.log("We good: " + PORT);
});
