const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

app.use('/static', express.static('static'))

// set the tamplate engine as pug

app.set('view engine','pug')

//  set the views directory
app.set('views',path.join(__dirname,'views'))


app.get("/",(req, res)=>{
    res.status(200).send(`This is home page of my first express application`);
})

app.get("/about",(req, res)=>{
    res.send(`This is about page of my first express application`);
})

app.post("/about",(req, res)=>{
    res.send(`This is post request in about page of my first express application`);
})

app.listen(port, ()=>{
    console.log(`The application was started successfully on port ${port}`);
})




