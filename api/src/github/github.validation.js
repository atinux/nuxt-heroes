const Joi = require('joi')

exports.authenticate = {
	query: Joi.object().keys({
		code: Joi.string().required()
	})
}
