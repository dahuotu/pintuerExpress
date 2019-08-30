/*
说明:数据采集方式获取接口
方式:Api方式
路径:dao/request/dao.js
*/

var $util = require('../../util/util');
var $nodegrass = require('nodegrass');


module.exports = {
	queryApi: function (req, res, next) {
		//请求参数
		var param = req.query;
		if (param.act) {
			//根据act类型判断请求接口
			var links = 'https://www.baidu.com';
			//get方式
			$nodegrass.get(links, function (data, status, headers) {
				if (data) {
					let result = JSON.parse(data);
					let resultData = {
						code: 0,
						msg: '查询成功',
						data: result
					};
					$util.jsonMsg(res, resultData);
				}
			}, null, 'utf8').on('error', function (e) {
				console.log("Got error: " + e.message);
			});
		} else {
			let result = {
				code: -1,
				msg: '参数错误'
			};
			$util.jsonMsg(res, result);
		}
	},
};