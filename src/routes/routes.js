'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const level1 = require('../models').level1;

router.get("/", function(req, res, next){
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})

router.get("/method", function(req, res, next){
    level1.logOut(4)
    res.send(level1);
    /*
    level1.save(function(err, level1){
        if(err) return console.error(err);
    })
    */
})


module.exports = router;