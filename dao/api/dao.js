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
	queryConnection: function (req, res, next) {
		//查询连接配置，对应路由connection
		var result = {
			code: 0,
			msg: '查询成功',
			data: [{
				host: $conf.mysql.host,
				user: $conf.mysql.user,
				password: $conf.mysql.password,
				database: $conf.mysql.database,
				port: $conf.mysql.port
			}]
		};
		$util.jsonMsg(res, result);
	},
	queryConfig: function (req, res, next) {
		//查询配置
		var param = req.query;
		if (param.type == null && param.database == null && param.table == null) {
			result = {
				code: -1,
				msg: '参数错误'
			};
			$util.jsonMsg(res, result);
			return;
		}
		var querySql = '';
		switch (param.type) {
			case 'database':
				//查询所有数据库，对应路由database
				querySql = $sql.queryDatabases;
				break;
			case 'table':
				//查询某个数据库下所有表,对应路由table
				querySql = $sql.queryTable;
				break;
			case 'column':
				//查询某数据库某表下字段,对应路由column
				querySql = $sql.queryColumn;
				break;
			default:
				break;
		}
		pool.getConnection(function (err, connection) {
			connection.query(querySql, [param.database, param.table], function (err2, result) {
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