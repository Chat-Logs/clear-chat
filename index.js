// Package Info
const packageInfo = require('./package.json');
exports.name = packageInfo.name;
exports.version = packageInfo.version;
// Methods
exports.createChat = require('./structures/Methods/createChat');