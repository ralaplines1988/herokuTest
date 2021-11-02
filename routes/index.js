var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.render("pages/index");
});

router.get("/hello", function (req, res) {
  res.send("Hello Nodejs");
});

router.post("/sum", function (req, res) {
  var n1 = parseInt(req.body.num1);
  var n2 = parseInt(req.body.num2);
  var sum = n1 + n2;
  res.json({ mysum: sum });
});

module.exports = router;
