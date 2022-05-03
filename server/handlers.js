const { Character } = require('./db');

module.exports = {
  getCharByName: (query) => Character.find({ name: query }),

  getAllCharacters: () => Character.find({}),

  createCharacter: ({
    name,
    profession,
    background,
    archetype,
    race,
    alignment,
    stats,
  }) => Character.create({
    name, profession, background, archetype, race, alignment, stats,
  }),
};
