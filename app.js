const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/views'));

//Routes
app.get('/',(req,res)=>{
    res.render('Landing');
})

app.get('/home',(req,res)=>{
    res.render('home');
})

// app.get('*',(req,res)=>{
//     res.send('Please Check Url Address');
// })







app.listen(3000,()=>{
    console.log("App Stated");
})