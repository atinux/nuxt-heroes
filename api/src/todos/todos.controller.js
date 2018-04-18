const { HttpError } = require('@terrajs/mono')
const { getFindOptions } = require('mono-mongodb')

const Todos = require('./todos.service')

exports.createTodo = async (req, res) => {
	const todo = await Todos.create(req.body)

	res.json(todo)
}

exports.listTodos = async (req, res) => {
	const options = getFindOptions(req.query)
	const todos = await Todos.find({}, options).toArray()

	res.json(todos)
}

exports.getTodo = async (req, res) => {
	const todo = await Todos.get(req.params.id)

	if (!todo) throw new HttpError('todo-not-found', 404)

	res.json(todo)
}

exports.updateTodo = async (req, res) => {
	const todo = await Todos.update(req.params.id, req.body)

	if (!todo) throw new HttpError('todo-not-found', 404)

	res.json(todo)
}

exports.deleteTodo = async (req, res) => {
	const todoDeleted = await Todos.delete(req.params.id)

	if (!todoDeleted) throw new HttpError('todo-not-found', 404)

	res.sendStatus(200)
}
