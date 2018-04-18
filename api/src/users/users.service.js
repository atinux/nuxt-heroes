const { db } = require('mono-mongodb')
const mongoUtils = require('mongodb-utils')

const collection = mongoUtils(db.collection('users'))

// See https://github.com/terrajs/mongodb-utils#find
exports.find = collection.utils.find

// See https://github.com/terrajs/mongodb-utils#get
exports.getById = collection.utils.get

exports.getByUsername = async (username, fields) => {
	return await collection.utils.get({ username }, fields)
}

// See https://github.com/terrajs/mongodb-utils#update
exports.update = collection.utils.update

exports.count = async (query = {}) => {
  return await collection.count(query)
}

exports.upsertByUsername = async (username, user) => {
	user.updatedAt = new Date()

	const update = {
		$set: user,
		$setOnInsert: {
      createdAt: new Date(),
      hero: null
		}
	}

	const result = await collection.findOneAndUpdate(
		{ username },
		update,
		{
			returnOriginal: false,
			upsert: true
		}
	)

	return result.value
}
