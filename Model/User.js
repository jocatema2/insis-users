var mongoose = require("mongoose");  

var Schema = mongoose.Schema;  

var UserSchema = new Schema({   Nome: String,   Reputacao: Number,   Estado: String,   Periodo: Date, });  module.exports = mongoose.model("User", UserSchema);