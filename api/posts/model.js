var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	title: String
});

// first arg is naming export object/model, second is passing the schema
module.exports = mongoose.model('Post', PostSchema);