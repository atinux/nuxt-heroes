const Users = require('./users.service')
const { HttpError } = require('@terrajs/mono')

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
	}
]
