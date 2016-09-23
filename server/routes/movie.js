var express = require('express');
var mongoose=require("mongoose");
var router = express.Router();
var movie = require('../model/movie');

//Logger  To Update the webpage.
var loggerTest=function(req,res,next){
  movie.find(function(err,data){
    if (err)
    {
      res.send(err)
    }
    else
    {
      console.log("middleware");
      //res.send(data);
    }
  })
};
//Display All Movie in DataBase

router.get('/display', function(req, res, next) {
  var movie=mongoose.model('movieCollection');
  movie.find({},function(err,data){
    if(err)
    {
      res.send(err);
    }
    else
    {
      res.send(data);

    }

  })

});

//Adding the favourite movie to the data base

router.post('/add', function(req, res, next) {
  console.log('Inside post');
  var movieVar = new movie(req.body);

  movieVar.save(function (err,data) {
    if(err)
    {
      res.send(err);
    }
    else
    {
    //  console.log("sent");
      res.send("added");
      next();
    }


});
});
//Update the fav movies in data base.


router.put('/update/:id/:title', function (req, res, next) {
  console.log(req.params.title);
  movie.findOneAndUpdate({imdbID:req.params.id}, {Title: req.params.title},function(err,data){
    console.log('inside update');
    if(err)
    {
      res.send(err);
    }
    else
    {
      console.log("Update Successful");
      res.send("Update Successful");
      next();
    }
  })
});



router.delete('/delete', function(req, res, next) {

  var movie=mongoose.model('movieCollection');
  movie.findOneAndRemove({imdbID:req.body.imdbID},function(err,data){
    if(err)
    {
      res.send(err);
    }
    else
    {
      res.send("Movie deleted!");
    }

  })

});

router.use(loggerTest);
module.exports = router;
