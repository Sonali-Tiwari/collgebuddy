const express=require("express");
const register=require("./register");
const login=require("./login");
const Submitt=require("./register")
// const logout=require("./logout");
const router=express.Router();

router.post("/register",register)
router.post("/login",login)
router.post("/register",Submitt)
// router.post("/logout",logout)

module.exports=router;