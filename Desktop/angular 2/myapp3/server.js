// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
require('./server/config/database');
var passport = require('passport');
var connectFlash = require('connect-flash');
var session = require('express-session');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));



app.set('superSecret', 'thisisprojectangular2');
require('./server/config/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());
app.use (connectFlash ());
app.use(session({
    secret: 'mysecret',
    resave: true,
    saveUninitialized: true
}));


// Set our api routes
app.use('/', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));