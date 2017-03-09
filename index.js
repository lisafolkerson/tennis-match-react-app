var express = require('express');
var app = express();

// Serve your API assets here. You'll need to include the post route file.
app.use(express.static('public'));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tennis-match');

var webpackMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');

app.use(webpackMiddleware(webpack(require('./webpack.config.js'))));

// Serve your static assets here. You'll need to use express.static middleware.
app.use('/api/posts', require('./api/posts'));

// If none of the above matches, serve public/index.html.
app.get('*', (req, res) => res.sendFile(__dirname + '/public/index.html'))

app.listen(8000);
