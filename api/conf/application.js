/*
** This is your application configuration
** See https://terrajs.org/mono/configuration
*/

module.exports = {
	mono: {
		// See https://terrajs.org/mono/configuration/modules
		modules: [
			'mono-doc',
			'mono-mongodb',
			'mono-io',
			'mono-push'
		],
		// See https://terrajs.org/mono/configuration/http
		http: {
			port: 8000
		},
		// See https://terrajs.org/mono/configuration/log
		log: {
			level: 'verbose'
    },
    // See https://github.com/terrajs/mono-push
    push: {
      io: true
    }
	}
}
