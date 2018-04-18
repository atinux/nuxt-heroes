/*
** Example:

See https://terrajs.org/mono/acl for documentation

const { imperium } = require('@terrajs/mono')

imperium.role('admin', (req) => !!req.session.admin)
imperium.role('user', async (req) => {
	return { user: req.session.userId }
})

*/
