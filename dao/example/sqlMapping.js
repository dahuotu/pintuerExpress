/*
test:CRUD SQL语句
路径:dao/example/sqlMapping.js
*/

var example = {
	//对应路由:add
	insert: 'INSERT INTO example(title,content) VALUES (?,?)',
	//对应路由:del
	delete: 'DELETE FROM example WHERE id=?',
	//对应路由:delete
	deleteByWhere: 'DELETE FROM example WHERE 1=1 AND title=?  AND content=?',
	//对应路由:edit
	edit: 'UPDATE example SET title=?,content=? WHERE id=?',
	//对应路由:update
	updateByWhere: 'UPDATE example SET title=?,content=? WHERE 1=1 AND title=?  AND content=?',
	//对应路由:id
	queryById: 'SELECT * FROM example WHERE id=?',
	//对应路由:query
	queryByWhere: 'SELECT * FROM example WHERE 1=1 AND title=?  AND content=?',
	//对应路由:list
	queryAll: 'SELECT * FROM example',
	//对应路由:page
	queryPage: 'SELECT * FROM example WHERE 1=1 AND title=?  AND content=? LIMIT ?,?'
};

module.exports = example;