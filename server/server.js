const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
let app = express();

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();  //next middleware
})

app.get('/' , (req, res) => {
    res.send('hello from the web server side')
})

app.use(bodyParser.urlencoded({extended:false}));

app.post('/contact-form', (req, res) => {
    console.log(req.body.email);
    console.log(req.body.name);
    res.send('thanks for your form');
})

app.use(express.static(path.join(__dirname, '../public')));//middleware

app.listen(3000);