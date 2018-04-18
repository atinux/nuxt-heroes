const Cookies = require('cookies')

module.exports = {
  path: '/logout',
  handler: async (req, res) => {
    // Get cookies
    const cookies = new Cookies(req, res)
    cookies.set('jwt', '', { expires: new Date(0), domain: req.headers.host }) // Remove jwt cookie
    res.status = 200
    res.end()
  }
}
