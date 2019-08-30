var express = require('express');
var router = express.Router();
var $dao = require('../dao/request/dao');

/* GET request listing. */
router.get('/', function (req, res, next) {
	res.json({
		code: '0',
		msg: 'sucess',
		data: ''
	});
});

//api
router.get('/api', function (req, res, next) {
	$dao.queryApi(req, res, next);
});

/*
自定义路由，自行增加
*/



module.exports = router;