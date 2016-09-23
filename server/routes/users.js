var express = require('express');
var router = express.Router();
var app = express();
//var user1 = require('../model/user');

/* GET users listing. */
app.post('/test/:name', function(req,res){
  res.send("done");
});

/*app.post('/userinsert/:userid/:password', function (req, res) {
var user = new user1();
//user.username=req.params.userid;
//user.password=req.params.password;
user.title=req.params.title;
user.year=req.params.year;
user.type=req.parms.type;
user.save(function (err) {
  if(err)
  {
    res.send(err);
  }
  else
  {
    res.send("data send");
  }

});
});*/

module.exports= app;
