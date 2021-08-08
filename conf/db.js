/**
 * 整个node站点MySql数据库连接配置串
 * 存储在大火兔提供的node框架conf文件夹下，只要替换db.js或者复制以上连接串找到db.js内即可
 */
module.exports = {
	mysql: {
		host: '127.0.0.1', 	//数据主机地址
		user: 'root',	   	//数据库用户名
		password: '',		//数据库密码
		database: 'test',	//数据库名称
		port: 3306 			//端口号
	}
};