const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));


//Routes
app.get('/',(req,res)=>{
    res.send("Landing Page");
})

app.get('/home',(req,res)=>{
    res.render('home');
})







app.listen(3000,()=>{
    console.log("App Stated");
})