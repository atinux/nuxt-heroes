const { db } = require('mono-mongodb')
const mongoUtils = require('mongodb-utils')

const collection = mongoUtils(db.collection('heroes'))

// See https://github.com/terrajs/mongodb-utils#find
exports.find = collection.utils.find

exports.getBySlug = async (slug, fields) => {
	return await collection.utils.get({ slug }, fields)
}
