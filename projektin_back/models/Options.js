import mongoose from "mongoose";
// var mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Options = new Schema({
  objectType: String,
  settings:  Array 
});

module.exports = mongoose.model("Options", Options);

