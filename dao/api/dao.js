/*
说明:实现与MySQL交互
方式:Api方式
路径:dao/api/dao.js
*/

var $mysql = require('mysql');
var $conf = require('../../conf/db');
var $util = require('../../util/util');
var $sql = require('./sqlMapping');

// 使用连接池，提升性能
var pool = $mysql.createPool($util.extend({}, $conf.mysql));

module.exports = {
	queryTable: function (req, res, next) {
		//查询所有表,对应路由table
		pool.getConnection(function (err, connection) {
			connection.query($sql.queryTable, function (err2, result) {
				if (result != null) {
					console.log(result);
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
	queryColumn: function (req, res, next) {
		//查询所有字段,对应路由column
		var param = req.query;
		if (param.table == null) {
			result = {
				code: -1,
				msg: '参数错误'
			};
			$util.jsonMsg(res, result);
			return;
		}
		pool.getConnection(function (err, connection) {
			connection.query($sql.queryColumn, [param.table], function (err2, result) {
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