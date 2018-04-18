const { HttpError } = require('@terrajs/mono')

const Users = require('./users.service')
const validation = require('./users.validation')
const Heroes = require('../heroes/heroes.service')

module.exports = [
	{
		method: 'GET',
		path: '/user',
    session: true,
    async handler(req, res) {
      const user = await Users.getById(req.session.userId)
      if (!user) throw new HttpError('user-not-found', 404)

      res.json(user)
    }
  },
  {
    method: 'PUT',
    path: '/user/hero',
    session: true,
    validation: validation.chooseHero,
    async handler(req, res) {
      let user = await Users.getById(req.session.userId)
      if (!user) throw new HttpError('user-not-found', 404)

      const hero = await Heroes.getBySlug(req.body.hero)
      if (!hero) throw new HttpError('hero-not-found', 404)

      user = await Users.update(user._id, { hero: hero.slug })

      res.json(user)
    }
  }
]
