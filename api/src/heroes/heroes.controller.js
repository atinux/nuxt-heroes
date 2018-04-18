const Heroes = require('./heroes.service')

exports.listHeroes = async function (req, res) {
  const heroes = await Heroes.find({}).toArray()

  res.json(heroes)
}
