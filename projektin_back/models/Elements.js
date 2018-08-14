import mongoose from "mongoose";
// var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Elements = new Schema({
  objectType: String,
  settings: {} 
});

module.exports = mongoose.model("Elements", Elements);
 