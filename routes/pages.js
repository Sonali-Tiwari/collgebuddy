const express=require("express");
const router=express.Router();
const loggedin=require("../controllers/loggedin");

router.get('/',(req,res)=> {
 res.render('index');
})

router.get('/login', function (req, res) {
    return res.render('login')
})

router.get('/register', function (req, res) {
    return res.render('register')
})


router.get('/',function(req,res){
    return res.render('index')
})

router.get('/',loggedin, function (req, res) {
    if(req.users){
    return res.render('/',{ status:"ok", users: req.users})
}
})




router.get('/register', function (req, res) {
    return res.sendFile('register.ejs',{root:"./views"})
})

router.get('/login', function (req, res) {
    return res.sendFile('login.ejs',{root:"./views"})
})


router.get('/Submitt', function (req, res) {
    return res.sendFile('register.ejs',{root:"./views"})
})



module.exports=router;