var express = require("express");
var generatePersona = require('../bin/generatePersona')
var router = express.Router();

/* GET home page. */
//pull out the value send back with class change with interpleation
//styles model
// if cookie() is evil chage class of body dark background

router.get("/", function(req, res, next) {
  console.log(req.cookies.persona)
  persona = generatePersona(req.cookies.persona);
  console.log(persona)
  res.render("index", {persona});
});

router.post("/update", function(req, res, next) {
  let persona = req.body;
  res.cookie("persona", persona)
  res.redirect('/');
});

module.exports = router;

// app.get("/", (req, res) => {
// const favorites = req.cookies.favorites;
// res.render("home", { favorites });
// });