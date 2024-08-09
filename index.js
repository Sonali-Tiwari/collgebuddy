const express = require('express');
// import {account} from'./appwrite'
const db = require('./routes/connection');
const path = require('path');
const port = 8000;
const cookie=require('cookie-parser');

const app = express(); 
const ejs = require('ejs');



app.use(express.static('assets'))
app.use(express.urlencoded());
app.use(cookie());
app.use(express.json());


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')



 

app.use("/",require("./routes/pages"))
app.use("/api",require("./controllers/auth"))


app.listen(port,function(err){
    if(err)
    console.log("Error");
else
    console.log("Server started on port ",port);
})