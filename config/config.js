require('dotenv').config();

module.exports = {
	development: {
		username: process.env.DB_USER,
		password: process.env.PASS,
		database: process.env.DATABASE,
		host: process.env.HOST,
		dialect: 'mysql',
		operatorsAliases: false
	},
	test: {
		username: process.env.DB_USER,
		password: process.env.PASS,
		database: process.env.DATABASE,
		host: process.env.HOST,
		dialect: 'mysql',
		operatorsAliases: false
	},
	production: {
		// may change later
		use_env_variable: 'blah',
		dialect: 'mysql'
	}
};
