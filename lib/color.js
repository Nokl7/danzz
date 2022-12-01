const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const NocsLog = (text, color) => {
	return !color ? chalk.yellow('[Nocs] ') + chalk.green(text) : chalk.yellow('[Coding] ') + chalk.keyword(color)(text)
}

module.exports = {
	color,
	bgcolor,
	Log
}
