module.exports = {
  mono: {
    jwt: {
      secret: process.env.MONO_JWT_SECRET
    },
    log: {
      level: 'info'
    },
		mongodb: {
      url: process.env.MONGO_URI,
      dbName: process.env.MONGO_DB
		}
	}
}
