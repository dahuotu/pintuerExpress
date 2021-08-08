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
//connection
router.get('/connection', function (req, res, next) {
	$dao.queryConnection(req, res, next);
});
//database
router.get('/config', function (req, res, next) {
	$dao.queryConfig(req, res, next);
});
//table
router.get('/config', function (req, res, next) {
	$dao.queryConfig(req, res, next);
});
//column
router.get('/config', function (req, res, next) {
	$dao.queryConfig(req, res, next);
});

module.exports = router;