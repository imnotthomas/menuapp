var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    author: String,
    title: String,
    commentText: String,
    rating: {type: Number
             ,"default": 1
             ,min: 1
             ,max: 5}
});

var ItemSchema = new mongoose.Schema({
    name: String,
    restaurant: String,
    rating: {type: Number
	    ,"default": 1
	    ,min: 1
	    ,max: 5},
    numComments: Number,
    comments: [CommentSchema]
});

module.exports = mongoose.model('Item', ItemSchema);
