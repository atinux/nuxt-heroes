const { asyncMap } = require('@terrajs/mono/utils')

const Heroes = require('./heroes.service')

exports.listHeroes = async function (req, res) {
  let heroes = await Heroes.find({}, { fields: ['slug'] }).toArray()

  heroes = await asyncMap(heroes, async (hero) => Heroes.getFullHeroBySlug(hero.slug))

  res.json(heroes)
}
