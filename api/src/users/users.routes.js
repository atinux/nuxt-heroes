module.exports = [
	{
		method: 'GET',
		path: '/user',
    session: true,
    handler(req, res) {
      res.json(req.session)
    }
	}
]
