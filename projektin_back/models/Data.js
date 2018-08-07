import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Data = new Schema({
    tagName: {
        type: String
    },
    color: {
        type: String
    },
    fontSize: {
        type: Number
    },
    fontWeight: {
        type: Number
    },
    padding: {
        type: Number
    },
    width: {
        type: Number
    },
    height: {
        type: Number
    },
    borderWidth: {
        type: Number
    },
    borderRadius: {
        type: Number
    },
   backgroundColor: {
        type: String
    }

});

export default mongoose.model('Data', Data);
