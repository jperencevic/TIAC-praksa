import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Options = new Schema({
  objectType: String,
  settings:  Array 
});

export default mongoose.model("Options", Options);

