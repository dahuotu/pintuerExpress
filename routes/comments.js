var express = require('express');
var router = express.Router();
var $dao = require('../dao/comments/dao');

/* GET demo listing. */
router.get('/', function (req, res, next) {
	res.json({
		code: '0',
		msg: 'sucess',
		data: ''
	});
});

//add
router.post('/add', function (req, res, next) {
	$dao.add(req, res, next);
});
//del
router.post('/del', function (req, res, next) {
	$dao.delete(req, res, next);
});
//edit
router.post('/edit', function (req, res, next) {
	$dao.update(req, res, next);
});
//id
router.get('/id', function (req, res, next) {
	$dao.queryById(req, res, next);
});
//list
router.get('/list', function (req, res, next) {
	$dao.queryAll(req, res, next);
});
//page
router.get('/page', function (req, res, next) {
	$dao.queryPage(req, res, next);
});

/*
自定义路由，自行增加
*/



module.exports = router;