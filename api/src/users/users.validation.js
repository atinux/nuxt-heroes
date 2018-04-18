const Joi = require('joi')

exports.chooseHero = {
	body: Joi.object().keys({
		hero: Joi.string().required()
	})
}
