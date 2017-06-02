/*
 * Database connectivity
 */
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/maps");
//check if we are connected successfully or not
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

module.exports = db;