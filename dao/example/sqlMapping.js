/*
example:CRUD SQL语句
路径:dao/example/sqlMapping.js
*/

var example = {
	//新增一条记录，对应路由:add
	insert: 'INSERT INTO example(title,content) VALUES (?,?)',
	//删除一条记录，对应路由:del
	delete: 'DELETE FROM example WHERE id=?',
	//删除指定条件的多条记录，对应路由:delete
	deleteByWhere: 'DELETE FROM example WHERE 1=1 AND title=? AND content=?',
	//更新一条记录，对应路由:edit
	edit: 'UPDATE example SET title=?, content=? WHERE id=?',
	//更新指定条件的记录，对应路由:update
	updateByWhere: 'UPDATE example SET title=?, content=? WHERE 1=1 AND title=? AND content=?',
	//查询一条记录的详情，对应路由:id
	queryById: 'SELECT * FROM example WHERE id=?',
	//查询指定条件的记录，对应路由:query
	queryByWhere: 'SELECT * FROM example WHERE 1=1 AND title=? AND content=?',
	//查询所有记录，对应路由:list
	queryAll: 'SELECT * FROM example',
	//查询置顶记录，对应路由:top
	queryTop: 'SELECT * FROM example LIMIT ?',
	//查询指定条件的分页记录，对应路由:page
	queryPage: 'SELECT * FROM example WHERE 1=1 AND title=? AND content=? LIMIT ?,?'
};

module.exports = example;