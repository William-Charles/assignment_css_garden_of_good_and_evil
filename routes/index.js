var express = require("express");
var router = express.Router();

/* GET home page. */
//pull out the value send back with class change with interpleation
//styles model
// if cookie() is evil chage class of body dark background

router.get("/", function(req, res, next) {
  //likes = generateLikes(req.cookies);
  res.render("index");
});

router.post("/", function(req, res, next) {
  const id = req.body
  let likes = req.cookies.likes || [];
  console.log(id);
  res.cookie("likes", id);
  console.log(req.cookies.likes)
  res.render("index");
});

module.exports = router;

