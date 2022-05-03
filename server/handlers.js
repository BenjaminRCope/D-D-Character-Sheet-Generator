const { Character } = require('./db');

module.exports = {
  getCharacters: () => Character.find({}),

  createCharacter: (dataObj) => Character.create({ dataObj }),
};
