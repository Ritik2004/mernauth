const express = require("express")

const { userSignUp,userSignIn ,userPassword,resetPassword} =  require("../controllers/user");
const router = express.Router();

router.post("/register", userSignUp);
router.post("/login", userSignIn);
router.post("/forgotpwd", userPassword)
router.post("/resetpwd/:id/:token", resetPassword)

module.exports = router;