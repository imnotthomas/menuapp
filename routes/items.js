var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Item = require('../models/Items.js');

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

/* GET users listing. */
router.get('/', function(req, res, next) {
    Item.find(function(err, items){
	if(err) return next(err);
	res.json(items);
    });
});

router.get('/:id', function(req, res, next) {
    Item.findById(req.params.id, function (err, post) {
	if (err) return next(err);
	res.json(post);
    });
});

router.post('/:id/review', function(req, res, next) {
    Item
	.findById(req.params.id)
	.select('comments')
        .exec(
	    function(err, item){
		item.comments.push({
		    author: req.body.author,
		    title: req.body.title,
		    commentText: req.body.commentText,
		    rating: req.body.rating
		});
		item.save(function(err, item) {
		    console.log('hello')
		    res.json(item.comments[item.comments.length - 1]);
		});
	    });
});

module.exports = router;
