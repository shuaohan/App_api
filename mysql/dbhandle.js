// add:  delete: update: select:
//select:
//      lunbotu table:lunbotu   sql:select * from lunbotu;
//      home_one    table:homeone sql:select * from homeone;
//     
//api
//  get:   api/lunbotu    return all
//  get:   api/home       return all
//  get:   api/home/id    return  all.id 
//导入连接池
var connectpool=require('./connect.js')


module.exports={
    select:function(sql,callback){
        connectpool.getConnection(function(err,connection){
            connection.query(sql,function(err,res){
                callback(err,res);
                connection.release();
            })
        })

    },
    add:function(){

    },
    delete:function(){
        
    },
    update:function(){

    }
}