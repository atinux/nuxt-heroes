const controller = require('./github.controller')
const validation = require('./github.validation')

module.exports = [
	{
		method: 'GET',
		path: '/github/auth',
		validation: validation.authenticate,
		handler: controller.authenticate,
		documentation: {
			name: 'Github Callback',
			description: 'This is an auth url'
		}
	}
]
