const mongoose = require('mongoose');

//* Mongoose Log Schema (Blueprint)
const logSchema = new mongoose.Schema({
   title: {type: String, required: true},
   entry: {type: String, required: true},
   shipIsBroken: {type: Boolean, default: true}
}, 
{ timestamps: true }
)


//* Create Mongoose Model
const Log = mongoose.model('Log', logSchema)

module.exports = Log