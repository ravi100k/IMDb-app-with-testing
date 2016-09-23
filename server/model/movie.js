var mongoose=require("mongoose");
var Schema =mongoose.Schema;

var movie= new Schema({

  Title:String,
  Year:String,
  imdbID:String,
  Poster:String

});
module.exports=mongoose.model('movieCollection',movie);
