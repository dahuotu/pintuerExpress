var $conf = require('../../conf/db');
/*
test:CRUD SQL语句
路径:dao/api/sqlMapping.js
*/
var api = {
	//对应路由:table
	queryTable: "select table_name as `name` from information_schema.tables where table_schema='" + $conf.mysql.database + "' and table_type = 'base table'",
	//对应路由:column
	queryColumn: "select column_name as `字段名`,column_type as `字段类型`,data_type as `数据类型`,character_maximum_length as `字符长度`,numeric_precision as `数字长度`,numeric_scale as `小数位数`,case when is_nullable = 'no' then 'n' else 'y' end as `允许空`,case when extra = 'auto_increment' then 'y' else 'n' end as `是否自增`,column_key as `约束`,column_default as `默认值`,column_comment as `说明` from information_schema.columns where table_schema='" + $conf.mysql.database + "' and table_name=?",
};

module.exports = api;