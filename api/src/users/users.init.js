const { db } = require('mono-mongodb')

const collection = db.collection('users')

module.exports = async () => {
  // Set index unique for usernames
	await collection.createIndex({ username: 1 }, { unique: true })
	await collection.createIndex({ slug: 1 })
}
