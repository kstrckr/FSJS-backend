'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jsonParser = require('body-parser').json;

const routes = require('./routes/routes');

const config = require('./config');

mongoose.connect("mongodb://localhost:27017/sandbox")

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("DB Connected");
})


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