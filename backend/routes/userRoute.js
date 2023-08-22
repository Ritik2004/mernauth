const express = require("express")
const { userSignUp } =  require("../controllers/user");
const router = express.Router();

router.post("/signin", userSignUp);

module.exports = router;