const axios = require('axios')
const Cookies = require('cookies')
const { parse } = require('url')

module.exports = {
  path: '/github/callback',
  handler: async (req, res) => {
    // Get cookies
    const cookies = new Cookies(req, res)
    // Get req.query
    req.query = parse(req.url, true).query
    // Call Api to verify Github OAuth 2.0 code
    try {
      const { data } = await axios.get(`${process.env.HEROES_API}/github/auth?code=${req.query.code}`)
      // Add JWT cookie
      cookies.set('jwt', data.token, { httpOnly: true })
      // Redirect to home
      res.setHeader('Location', '/choose')
    } catch (err) {
      cookies.set('jwt') // Remove jwt cookie
      res.setHeader('Location', '/')
    }
    // Set status code to 302 - Found and end request
    res.statusCode = 302
    res.end()
  }
}
