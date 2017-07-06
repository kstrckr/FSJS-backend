'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const level1 = require('../models/models').level1;

router.get("/", function(req, res, next){
    res.render('index', { title: 'Hey', message: 'Hello there!' })
})

router.get("/method", function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    level1.generateBoard(12)
    let boardIngredients = {};
    boardIngredients.length = level1.length;
    boardIngredients.id = level1._id;
    res.send(boardIngredients);
    /*
    level1.save(function(err, level1){
        if(err) return console.error(err);
    })
    */
})


module.exports = router;