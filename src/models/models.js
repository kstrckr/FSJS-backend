'use strict';

const mongoose = require('mongoose');
const allCodes = require('./unicodes');
var Schema = mongoose.Schema;

const MatchGameSchema = new Schema({
    createdAt: {type: Date, default: Date.now},
    length: Number,
    gameTiles: {type: [], default: []}
})

//Instance Method
MatchGameSchema.methods.generateBoard = function(length){
    let newBoard = [];
    let totalTiles = length/2
    let possibleTiles = allCodes.codes;
    for(let i = 0; i < totalTiles; i++) {
        let randomNumb = Math.floor(Math.random() * possibleTiles.length)-1;
        let newTile = `&#${possibleTiles[randomNumb]}`;
        newBoard.push(newTile);
    }

    let output = newBoard.concat(newBoard);
    output.sort((a, b) => {return 0.5 - Math.random()});
    console.log(output.length);

    this.length = length
    this.gameTiles = output;
}

const NewLevel = mongoose.model('NewLevel', MatchGameSchema);

const level1 = new NewLevel();

module.exports.level1 = level1;

