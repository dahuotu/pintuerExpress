/*
comments:CRUD SQL语句
路径:dao/comments/sqlMapping.js
*/

var comments = {
	//对应路由:add
	insert: 'INSERT INTO comments(id,content) VALUES (0,?)',
	//对应路由:del
	delete: 'DELETE FROM comments WHERE id=?',
	//对应路由:edit
	update: 'UPDATE comments SET content=? WHERE id=?',
	//对应路由:id
	queryById: 'SELECT * FROM comments WHERE id=?',
	//对应路由:list
	queryAll: 'SELECT * FROM comments',
	//对应路由:page
	queryPage: 'SELECT * FROM comments WHERE 1=1 LIMIT ?,?'
};

module.exports = comments;