/*
** See https://terrajs.org/mono/routes#validation
*/
const Joi = require('joi') // joi is a dependency of mono
const { findValidation } = require('mono-mongodb') // See https://github.com/terrajs/mono-mongodb#utils

exports.createTodo = {
	body: Joi.object().keys({
		title: Joi.string().min(1).required()
	})
}

exports.listTodos = {
	params: Joi.object().keys({
		id: Joi.string().length(24).alphanum()
	}),
	query: Joi.object().keys(findValidation)
}

exports.getTodo = {
	params: Joi.object().keys({
		id: Joi.string().length(24).alphanum()
	})
}

exports.updateTodo = {
	params: Joi.object().keys({
		id: Joi.string().length(24).alphanum()
	}),
	body: Joi.object().keys({
		title: Joi.string().min(1).required()
	})
}

exports.deleteTodo = {
	params: Joi.object().keys({
		id: Joi.string().length(24).alphanum()
	})
}
