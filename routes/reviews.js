var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Item = require('../models/Items.js');

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

router.post('/', function(req, res, next) {
    Item
    .findById(req.params.id)
    .select('comments')
    .exec(
	function(err, item) {
	    if(err) sendJSONresponse(res, 404, err);
	    else console.log('hello');
	}
    )
});

module.exports = router;
