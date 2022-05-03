/* eslint-disable no-console */
const { getCharacterNames, createCharacter } = require('./handlers');

module.exports.getCharacterNames = (req, res) => {
  getCharacterNames()
    .then((data) => {
      const names = [];
      data.forEach((char) => {
        if (char.name) {
          names.push(char.name);
        }
      });
      res.status(200).send(names);
    })
    .catch(() => res.sendStatus(418));
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
