const { jwt } = require('@terrajs/mono')

const Github = require('./github.service')
const Users = require('../users/users.service')

exports.authenticate = async (req, res) => {
	const { code } = req.query // We receives host too to know where the login comes from
	const accessToken = await Github.getAccessToken(code)
	// Find community associated to this host
	const profile = await Github.getUserProfile(accessToken)
	// Returns upserted user to always update the accessToken
	const user = await Users.upsertByUsername(profile.login, {
		username: profile.login,
		name: profile.name,
    bio: profile.bio || '',
		githubId: profile.id,
		githubToken: accessToken,
		member: true
	})
  // Generate jwt token
  const token = await jwt.generateJWT({
		userId: user._id,
		username: user.username,
		githubId: user.githubId
	})

	// Returns session (jwt accessToken + username)
	res.json({ token })
}
