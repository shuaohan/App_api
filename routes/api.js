var express = require('express');
var router = express.Router();
var dbhandle =require('../mysql/dbhandle.js')
/* GET users listing. */
//路由 "/api/lunbotu"
router.get('/lunbotu', function(req, res, next) {
  //
    dbhandle.select("select * from lunbotu",function(dataerr,datares){
      if(dataerr)
      {
        res.status(404).json({"state":'error'});
      }
      else{
       // res.status(404).json({"state":'error'});
        res.status(200).json(datares);
      }
    })
});
router.get('/2', function(req, res, next) {
  res.send('2');
});

module.exports = router;
