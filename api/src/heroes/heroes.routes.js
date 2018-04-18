const controller = require('./heroes.controller')

module.exports = [
  {
    method: 'GET',
    path: '/heroes',
    handler: controller.listHeroes
  }
]
