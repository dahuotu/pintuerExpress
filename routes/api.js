var express = require('express');
var router = express.Router();
var $dao = require('../dao/api/dao');

/* 
内置接口，服务器相关.
路由路径 routes/api.js
*/
router.get('/', function (req, res, next) {
	res.json({
		code: '0',
		msg: 'sucess',
		data: ''
	});
});

//table
router.get('/table', function (req, res, next) {
	$dao.queryTable(req, res, next);
});
//column
router.get('/column', function (req, res, next) {
	$dao.queryColumn(req, res, next);
});

module.exports = router;