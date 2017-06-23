'use strict';

const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const MatchGameSchema = new Schema({
    level: {type: Number, default: 1},
    dimensions: {type: Number, default: 4},
    createdAt: {type: Date, default: Date.now},
    gameTiles: {type: [], default: [0, 0, 0, 0]}
})

//Instance Method
MatchGameSchema.methods.logOut = function(length){
    let halfOutput = [];
    let outputSize = length;
    for (let i = outputSize; i > 0; i--){
        halfOutput.unshift(i)
    }
    let output = halfOutput.concat(halfOutput);
    output.sort(function(a,b){return 0.5 - Math.random()});
    return this.gameTiles = output;
}

const NewLevel = mongoose.model('NewLevel', MatchGameSchema);

const level1 = new NewLevel();

module.exports.level1 = level1;

