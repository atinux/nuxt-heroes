const { asyncMap } = require('@terrajs/mono/utils')

const Heroes = require('./heroes.service')
const Users = require('../users/users.service')

exports.listHeroes = async function (req, res) {
  let heroes = await Heroes.find({}).toArray()

  heroes = await asyncMap(heroes, async (hero) => {
    const fans = await Users.count({ hero: hero.slug })

    return {
      ...hero,
      fans
    }
  })

  res.json(heroes)
}
