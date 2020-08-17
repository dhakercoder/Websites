const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

// express stuff
app.use('/static', express.static('static'))

// pug stuff
app.set('view engine','pug');// set the tamplate engine as pug
app.set('views',path.join(__dirname,'views'));//  set the views directory



// end points

app.get("/",(req, res)=>{
    res.status(200).render('index.pug')
})

// start the port
app.listen(port, ()=>{
    console.log(`The application was started successfully on port ${port}`);
})




