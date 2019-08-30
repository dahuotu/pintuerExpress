/*
example:CRUD SQL语句
路径:dao/example/sqlMapping.js
*/

var example = {
	//对应路由:add
	insert: 'INSERT INTO example(id,title,content) VALUES (0,?,?)',
	//对应路由:del
	delete: 'DELETE FROM example WHERE id=?',
	//对应路由:delete
	deleteByWhere: 'DELETE FROM example WHERE 1=1 AND title=?',
	//对应路由:edit
	update: 'UPDATE example SET title=?,content=? WHERE id=?',
	//对应路由:update
	updateByWhere: 'UPDATE example SET title=?,content=? WHERE 1=1 AND title=?',
	//对应路由:id
	queryById: 'SELECT * FROM example WHERE id=?',
	//对应路由:query
	queryByWhere: 'SELECT * FROM example WHERE 1=1 AND title=?',
	//对应路由:list
	queryAll: 'SELECT * FROM example',
	//对应路由:page
	queryPage: 'SELECT * FROM example WHERE 1=1 LIMIT ?,?'
};

module.exports = example;