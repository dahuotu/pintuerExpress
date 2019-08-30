/*
说明:实现与MySQL交互
方式:Api方式
路径:dao/comments/dao.js
*/

var $mysql = require('mysql');
var $conf = require('../../conf/db');
var $util = require('../../util/util');
var $sql = require('./sqlMapping');

// 使用连接池，提升性能
var pool = $mysql.createPool($util.extend({}, $conf.mysql));

module.exports = {
	add: function (req, res, next) {
		//Post方式新增,对应路由 add
		var param = req.query;
		if (param.content == null) {
			result = {
				code: -1,
				msg: '参数错误',
				data: null
			};
			$util.jsonMsg(res, result);
			return;
		}
		pool.getConnection(function (err, connection) {
			connection.query($sql.insert, [param.content], function (err, result) {
				if (result.affectedRows > 0) {
					result = {
						code: 0,
						msg: '新增成功',
						data: []
					};
				} else {
					result = {
						code: -1,
						msg: '新增失败',
						data: []
					};
				}
				$util.jsonMsg(res, result);
				connection.release();
			});
		});
	},
	delete: function (req, res, next) {
		//通过ID删除,对应路由 del
		var param = req.query;
		if (param.id == null) {
			result = {
				code: -1,
				msg: '参数错误',
				data: null
			};
			$util.jsonMsg(res, result);
			return;
		}
		pool.getConnection(function (err, connection) {
			connection.query($sql.delete, [param.id], function (err, result) {
				if (result.affectedRows > 0) {
					result = {
						code: 0,
						msg: '删除成功',
						data: []
					};
				} else {
					result = {
						code: -1,
						msg: '删除失败',
						data: []
					};
				}
				$util.jsonMsg(res, result);
				connection.release();
			});
		});
	},
	update: function (req, res, next) {
		//通过ID更新,对应路由 edit
		var param = req.query;
		if (param.content == null || param.id == null) {
			result = {
				code: -1,
				msg: '参数错误',
				data: null
			};
			$util.jsonMsg(res, result);
			return;
		}
		pool.getConnection(function (err, connection) {
			connection.query($sql.update, [param.content, param.id], function (err, result) {
				if (result.affectedRows > 0) {
					result = {
						code: 0,
						msg: '修改成功',
						data: []
					};
				} else {
					result = {
						code: -1,
						msg: '修改失败',
						data: []
					};
				}
				$util.jsonMsg(res, result);
				connection.release();
			});
		});
	},
	queryById: function (req, res, next) {
		//通过ID查询详情,对应路由id
		var param = req.query;
		if (param.id == null) {
			result = {
				code: -1,
				msg: '参数错误',
				data: null
			};
			$util.jsonMsg(res, result);
			return;
		}
		pool.getConnection(function (err, connection) {
			connection.query($sql.queryById, [param.id], function (err, result) {
				if (result != null) {
					result = {
						code: 0,
						msg: '查询成功',
						data: result
					};
				} else {
					result = {
						code: -1,
						msg: '查询失败',
						data: []
					};
				}
				$util.jsonMsg(res, result);
				connection.release();
			});
		});
	},
	queryAll: function (req, res, next) {
		//查询列表,对应路由list
		pool.getConnection(function (err, connection) {
			connection.query($sql.queryAll, function (err, result) {
				if (result != null) {
					result = {
						code: 0,
						msg: '查询成功',
						data: result
					};
				} else {
					result = {
						code: -1,
						msg: '查询失败',
						data: []
					};
				}
				$util.jsonMsg(res, result);
				connection.release();
			});
		});
	},
	queryPage: function (req, res, next) {
		//通过指定条件查询分页列表,对应路由page
		var param = req.query;
		if (param.index == null || param.size == null) {
			result = {
				code: -1,
				msg: '参数错误',
				data: null
			};
			$util.jsonMsg(res, result);
			return;
		}
		pool.getConnection(function (err, connection) {
			connection.query($sql.queryPage, [+((param.index - 1) * param.size), +param.size], function (err, result) {
				if (result != null) {
					result = {
						code: 0,
						msg: '查询成功',
						data: result
					};
				} else {
					result = {
						code: -1,
						msg: '查询失败',
						data: []
					};
				}
				$util.jsonMsg(res, result);
				connection.release();
			});
		});
	},
};