const { Router } = require("express");
var express = require("express");
var router = express.Router();

const { signout } = require("../controllers/auth");
const { signup } = require("../controllers/auth");

router.post("/signup", signup);

router.get("/signout", signout);

module.exports = router;
