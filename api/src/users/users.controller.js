const { HttpError } = require('@terrajs/mono')
const { pushAll } = require('mono-push')

const Users = require('./users.service')
const Heroes = require('../heroes/heroes.service')

exports.getUser = async (req, res) => {
  const user = await Users.getById(req.session.userId)
  if (!user) throw new HttpError('user-not-found', 404)

  res.json(user)
}

exports.chooseHero = async (req, res) => {
  const user = await Users.getById(req.session.userId)
  if (!user) throw new HttpError('user-not-found', 404)
  let hero = await Heroes.getBySlug(req.body.hero, ['slug'])
  if (!hero) throw new HttpError('hero-not-found', 404)

  const updatedUser = await Users.update(user._id, { hero: hero.slug })

  // Send back response
  res.json(updatedUser)

  // Send push event to client apps
  hero = await Heroes.getFullHeroBySlug(updatedUser.hero)
  pushAll('hero:updated', hero)
  // If user switch the hero
  if (user.hero) {
    const oldHero = await Heroes.getFullHeroBySlug(user.hero)
    pushAll('hero:updated', oldHero)
  }
}
