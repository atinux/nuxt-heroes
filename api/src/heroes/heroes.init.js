const { db } = require('mono-mongodb')

const heroes = require('./heroes.json')
const collection = db.collection('heroes')

module.exports = async ({ log }) => {
  // Set index unique for slug
  await collection.createIndex({ slug: 1 }, { unique: true })

  // Count heroes in DB
  const count = await collection.count({})
  if (count === heroes.length) return
  // Add heroes in collection
  log.info('Fill database with heroes')
  await collection.deleteMany({})
  for (const hero of heroes) {
    await collection.insertOne(hero)
  }
}
