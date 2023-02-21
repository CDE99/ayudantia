const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dateSchema = new Schema({
    pet:{
        type: Schema.ObjectId,
        ref: "pet",
        required: true,
        
    },
    day:{
        type: Number,
        required: true
    },
    hour:{
        type: Number,
        required: true
    }
    
    
})

module.exports = mongoose.model('date', dateSchema);