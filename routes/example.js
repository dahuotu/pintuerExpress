var express = require('express');
var router = express.Router();
var $dao = require('../dao/example/dao');

/* 
GET example listing.
路由路径 routes/example.js
*/
router.get('/', function (req, res, next) {
	res.json({
		code: '0',
		msg: 'sucess',
		data: ''
	});
});

//新增一条记录，对应路由:add
router.post('/add', function (req, res, next) {
	$dao.add(req, res, next);
});
//删除一条记录，对应路由:del
router.post('/del', function (req, res, next) {
	$dao.delete(req, res, next);
});
//删除指定条件的多条记录，对应路由:delete
router.post('/delete', function (req, res, next) {
	$dao.deleteByWhere(req, res, next);
});
//更新一条记录，对应路由:edit
router.post('/edit', function (req, res, next) {
	$dao.update(req, res, next);
});
//更新指定条件的记录，对应路由:update
router.post('/update', function (req, res, next) {
	$dao.updateByWhere(req, res, next);
});
//查询一条记录的详情，对应路由:id
router.get('/id', function (req, res, next) {
	$dao.queryById(req, res, next);
});
//查询指定条件的记录，对应路由:query
router.get('/query', function (req, res, next) {
	$dao.queryByWhere(req, res, next);
});
//查询所有记录，对应路由:list
router.get('/list', function (req, res, next) {
	$dao.queryAll(req, res, next);
});
//查询置顶记录，对应路由:top
router.get('/top', function (req, res, next) {
	$dao.queryTop(req, res, next);
});
//查询指定条件的分页记录，对应路由:page
router.get('/page', function (req, res, next) {
	$dao.queryPage(req, res, next);
});


/*
自定义路由，自行增加
*/

module.exports = router;