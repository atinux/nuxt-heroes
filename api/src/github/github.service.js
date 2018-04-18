const { conf, HttpError } = require('@terrajs/mono')
const { parse } = require('querystring')
const axios = require('axios')

exports.getAccessToken = async (code) => {
  const { data } = await axios.post('https://github.com/login/oauth/access_token', {
		client_id: conf.github.clientId,
		client_secret: conf.github.clientSecret,
		code
	})
	const res = parse(data)

	if (res.error) throw new HttpError(`Github error: ${res.error}`, 400)
	if (!res.access_token) throw new HttpError(`Github error: no access token found`, 400)

	return res.access_token
}

exports.getUserProfile = async (accessToken) => {
  const { data } = await axios.get('https://api.github.com/user', {
		headers: {
      Authorization: `token ${accessToken}`
    }
  })

  return data
}
