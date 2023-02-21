const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const petSchema = new Schema({
    name:{
        type: String,
        required: true,
        minLenght: 1,
        maxLenght: 100
    },
    typee :{
        type: String,
        required: true,
        minLenght: 1,
        maxLenght: 100
    },
    breed:{
        type: String,
        required: false,
        minLenght: 1,
        maxLenght: 100
    },
    owner:{
        type: Schema.ObjectId,
        ref: "user",
        required: true
        
    }
    
})

module.exports = mongoose.model('pet', petSchema);