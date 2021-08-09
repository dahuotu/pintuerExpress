/*
说明:实现与MySQL交互
方式:Api方式
路径:dao/example/dao.js
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
		var param = req.body;
		if (param.title == null || param.content == null) {
			result = {
				code: -1,
				msg: '参数错误'
			};
			$util.jsonMsg(res, result);
			return;
		}
		pool.getConnection(function (err, connection) {
			connection.query($sql.insert, [param.title, param.content], function (err2, result) {
				if (result.affectedRows > 0) {
					result = {
						code: 0,
						msg: '新增成功',
						data: []
					};
				} else {
					result = {
						code: -1,
						msg: '新增失败:' + err2,
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
				msg: '参数错误'
			};
			$util.jsonMsg(res, result);
			return;
		}
		pool.getConnection(function (err, connection) {
			connection.query($sql.delete, [param.id], function (err2, result) {
				if (result.affectedRows > 0) {
					result = {
						code: 0,
						msg: '删除成功',
						data: []
					};
				} else {
					result = {
						code: -1,
						msg: '删除失败:' + err2,
						data: []
					};
				}
				$util.jsonMsg(res, result);
				connection.release();
			});
		});
	},
	deleteByWhere: function (req, res, next) {
		//通过指定条件删除,对应路由 delete
		var param = req.query;
		if (param.title == null || param.content == null) {
			result = {
				code: -1,
				msg: '参数错误'
			};
			$util.jsonMsg(res, result);
			return;
		}
		pool.getConnection(function (err, connection) {
			connection.query($sql.deleteByWhere, [param.title, param.content], function (err2, result) {
				if (result.affectedRows > 0) {
					result = {
						code: 0,
						msg: '删除成功',
						data: []
					};
				} else {
					result = {
						code: -1,
						msg: '删除失败:' + err2,
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
		if (param.title == null || param.content == null || param.id == null) {
			result = {
				code: -1,
				msg: '参数错误'
			};
			$util.jsonMsg(res, result);
			return;
		}
		pool.getConnection(function (err, connection) {
			connection.query($sql.edit, [param.title, param.content, param.id], function (err2, result) {
				if (result.affectedRows > 0) {
					result = {
						code: 0,
						msg: '修改成功',
						data: []
					};
				} else {
					result = {
						code: -1,
						msg: '修改失败:' + err2,
						data: []
					};
				}
				$util.jsonMsg(res, result);
				connection.release();
			});
		});
	},
	updateByWhere: function (req, res, next) {
		//通过指定条件更新,对应路由 update
		var param = req.query;
		if (param.title == null || param.content == null || param.quetitle == null || param.quecontent == null) {
			result = {
				code: -1,
				msg: '参数错误'
			};
			$util.jsonMsg(res, result);
			return;
		}
		pool.getConnection(function (err, connection) {
			connection.query($sql.updateByWhere, [param.title, param.content, param.quetitle, param.quecontent], function (err2, result) {
				if (result.affectedRows > 0) {
					result = {
						code: 0,
						msg: '修改成功',
						data: []
					};
				} else {
					result = {
						code: -1,
						msg: '修改失败' + err2,
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
				msg: '参数错误'
			};
			$util.jsonMsg(res, result);
			return;
		}
		pool.getConnection(function (err, connection) {
			connection.query($sql.queryById, [param.id], function (err2, result) {
				if (result != null) {
					result = {
						code: 0,
						msg: '查询成功',
						data: result
					};
				} else {
					result = {
						code: -1,
						msg: '查询失败' + err2,
						data: []
					};
				}
				$util.jsonMsg(res, result);
				connection.release();
			});
		});
	},
	queryByWhere: function (req, res, next) {
		//通过指定条件查询列表,对应路由query
		var param = req.query;
		if (param.title == null || param.content == null) {
			result = {
				code: -1,
				msg: '参数错误'
			};
			$util.jsonMsg(res, result);
			return;
		}
		pool.getConnection(function (err, connection) {
			connection.query($sql.queryByWhere, [param.title, param.content], function (err2, result) {
				if (result != null) {
					result = {
						code: 0,
						msg: '查询成功',
						data: result
					};
				} else {
					result = {
						code: -1,
						msg: '查询失败' + err2,
						data: []
					};
				}
				$util.jsonMsg(res, result);
				connection.release();
			});
		});
	},
	queryAll: function (req, res, next) {
		//查询所有列表,对应路由list
		pool.getConnection(function (err, connection) {
			connection.query($sql.queryAll, function (err2, result) {
				if (result != null) {
					result = {
						code: 0,
						msg: '查询成功',
						data: result
					};
				} else {
					result = {
						code: -1,
						msg: '查询失败' + err2,
						data: []
					};
				}
				$util.jsonMsg(res, result);
				connection.release();
			});
		});
	},
	queryTop: function (req, res, next) {
		//查询前多少条记录,对应路由top
		var param = req.query;
		if (param.top == null) {
			result = {
				code: -1,
				msg: '参数错误'
			};
			$util.jsonMsg(res, result);
			return;
		}
		pool.getConnection(function (err, connection) {
			connection.query($sql.queryTop, [Number(param.top)], function (err2, result) {
				if (result != null) {
					result = {
						code: 0,
						msg: '查询成功',
						data: result
					};
				} else {
					result = {
						code: -1,
						msg: '查询失败' + err2,
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
		if (param.title == null || param.content == null || param.index == null || param.size == null) {
			result = {
				code: -1,
				msg: '参数错误'
			};
			$util.jsonMsg(res, result);
			return;
		}
		pool.getConnection(function (err, connection) {
			var beign = (Number(param.index) - 1) * Number(param.size);
			var end = Number(param.index) * Number(param.size);
			connection.query($sql.queryPage, [param.title, param.content, beign, end], function (err2, result) {
				if (result != null) {
					result = {
						code: 0,
						msg: '查询成功',
						data: result
					};
				} else {
					result = {
						code: -1,
						msg: '查询失败' + err2,
						data: []
					};
				}
				$util.jsonMsg(res, result);
				connection.release();
			});
		});
	},
};