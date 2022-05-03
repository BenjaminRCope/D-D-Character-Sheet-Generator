/* eslint-disable no-console */
require('dotenv').config();

const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost:27017/fetcher';
mongoose.connect(mongoDB, { useNewURLParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to database');
  });

const characterSchema = new mongoose.Schema({
  name: String,
  profession: String,
  background: String,
  archetype: String,
  race: String,
  alignment: String,
  stats: [{
    str: Number,
    dex: Number,
    con: Number,
    int: Number,
    wis: Number,
    cha: Number,
  }],
});

const Character = mongoose.model('Character', characterSchema);

module.exports.Character = Character;
module.exports.mongoose = mongoose;
