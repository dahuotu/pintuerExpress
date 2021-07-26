/**
 * 整个node站点MySql数据库连接配置串
 * 存储在大火兔提供的node框架conf文件夹下，只要替换db.js或者复制以上连接串找到db.js内即可
 */
 module.exports = {
	mysql: {
		host: '127.0.0.1', 
		user: 'root',
		password: '',
		database:'test',
		port: 3306
	}
};