var test=require('./mysql/handle.js')
var sql='select * from lunbotu'
var res=test.select(sql,function(err,res){
    console.log(res);

})
