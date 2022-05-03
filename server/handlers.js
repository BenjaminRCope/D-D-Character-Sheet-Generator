const { Character } = require('./db');

module.exports = {
  getCharacterNames: () => Character.find({}),

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
