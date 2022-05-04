/* eslint-disable no-console */
const { getAllCharacters, createCharacter, getCharByName } = require('./handlers');

module.exports.getCharByName = (req, res) => {
  const query = req.query.queryName;
  getCharByName(query)
    .then((result) => res.status(200).send(result))
    .catch((err) => res.send(err));
};

module.exports.getAllCharacters = (req, res) => {
  getAllCharacters()
    .then((data) => res.status(200).send(data))
    .catch(() => res.sendStatus(500));
};

module.exports.createCharacter = (req, res) => {
  const char = req.body.currentChar;
  const dataObj = {
    name: char.charName,
    profession: char.charClass,
    background: char.charBackground,
    archetype: char.charArchetype,
    race: char.charRace,
    alignment: char.charAlign,
    stats: {
      str: char.charStats.str,
      dex: char.charStats.dex,
      con: char.charStats.con,
      int: char.charStats.int,
      wis: char.charStats.wis,
      cha: char.charStats.cha,
    },
  };

  createCharacter(dataObj)
    .then(() => res.sendStatus(201))
    .catch((err) => console.log(err));
};
