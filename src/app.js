'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jsonParser = require('body-parser').json;

const routes = require('./routes/routes');

const config = require('./config');



app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

/* -- initial test route
app.get('/', function(req, res){
    res.render('index', { title: 'Hey', message: 'Hello there!' })
});
*/

app.use("/api", routes);

app.listen(config.port, function(){
    console.log(`Glorious node app running on port ${config.port}`)
});