var mysql=require('mysql')
//引入MySQL配置文件
var connect=require('../mysql/mysql.js')
//创建MySQL连接池
var connectpool=mysql.createPool(connect);
module.exports=connectpool
