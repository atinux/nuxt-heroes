const todosValidation = require('./todos.validation')
const todosCtrl = require('./todos.controller')

module.exports = [
	{
		method: 'POST',
		path: '/todos',
		validation: todosValidation.createTodo,
		handler: todosCtrl.createTodo
	},
	{
		method: 'GET',
		path: '/todos',
		validation: todosValidation.listTodos,
		handler: todosCtrl.listTodos
	},
	{
		method: 'GET',
		path: '/todos/:id',
		validation: todosValidation.getTodo,
		handler: todosCtrl.getTodo
	},
	{
		method: 'PUT',
		path: '/todos/:id',
		validation: todosValidation.updateTodo,
		handler: todosCtrl.updateTodo
	},
	{
		method: 'DELETE',
		path: '/todos/:id',
		validation: todosValidation.deleteTodo,
		handler: todosCtrl.deleteTodo
	}
]
