const { db } = require('mono-mongodb')
const mongoUtils = require('mongodb-utils')
const Users = require('../users/users.service')

const collection = mongoUtils(db.collection('heroes'))

// See https://github.com/terrajs/mongodb-utils#find
exports.find = collection.utils.find

exports.getBySlug = async (slug, fields) => {
	return await collection.utils.get({ slug }, fields)
}

exports.getFullHeroBySlug = async (slug) => {
  const hero = await collection.utils.get({ slug })
  const fans = await Users.find({ hero: hero.slug }, { fields: ['githubId', 'username'] }).toArray()

  return {
    ...hero,
    fans,
    nbFans: fans.length
  }
}
