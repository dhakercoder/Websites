const express = require('express');
const app = express();
const port = 8000;

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




