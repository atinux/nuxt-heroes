const validation = require('./users.validation')
const controller = require('./users.controller')

module.exports = [
	{
		method: 'GET',
		path: '/user',
    session: true,
    handler: controller.getUser
  },
  {
    method: 'PUT',
    path: '/user/hero',
    session: true,
    validation: validation.chooseHero,
    handler: controller.chooseHero
  }
]
